// GoalHub API proxy — runs on Cloudflare Workers.
//
// Why this exists: API-Football's key is a metered, per-account secret (unlike
// TheSportsDB's public "123" test key), so it can never be embedded in
// script.js where anyone can view-source it and burn through your quota.
// This Worker holds the key server-side, proxies just the handful of
// requests GoalHub needs, and caches responses at Cloudflare's edge so the
// same fixture list isn't re-fetched from API-Football on every visitor.
//
// It also hosts the per-match chat + score-prediction room (ChatRoom below),
// unrelated to the API-Football proxying but sharing this Worker/deploy
// pipeline since it's already set up.

import { DurableObject } from "cloudflare:workers";

const API_BASE = "https://v3.football.api-sports.io";

// API-Football's league IDs (different numbering than TheSportsDB's).
// Verify these once a real key is live — a wrong ID silently returns an
// empty fixture list rather than an error, so double-check each league
// actually returns matches before trusting this list blindly.
const LEAGUE_IDS = {
  "Premier League": 39,
  "La Liga": 140,
  "Serie A": 135,
  "Ligue 1": 61,
  "Saudi Pro": 307,
  "Bundesliga": 78,
  "Eredivisie": 88,
  "Primeira Liga": 94,
  "Super Lig": 203,
  "Scottish Prem": 179,
  "Russian PL": 235,
  "Brasileirao": 71,
  "Super League GR": 197,
  "Jupiler Pro": 144
};

// Most of these leagues run Aug-May, so "season" = the year the season
// started (a date in early 2027 is still the "2026" season). Brasileirão
// runs on the calendar year instead — override it here rather than
// guessing wrong silently.
const SEASON_OVERRIDES = {
  Brasileirao: (date) => date.getFullYear()
};

function seasonForLeague(league, date) {
  if (SEASON_OVERRIDES[league]) return SEASON_OVERRIDES[league](date);
  return date.getMonth() >= 6 ? date.getFullYear() : date.getFullYear() - 1;
}

const CORS_HEADERS = {
  // Tighten this to your actual site's origin once GoalHub is deployed
  // somewhere with a fixed URL — "*" is fine for local testing.
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json", ...extraHeaders }
  });
}

async function apiFootballFetch(env, path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "x-apisports-key": env.API_FOOTBALL_KEY }
  });
  if (!res.ok) {
    throw new Error(`API-Football responded ${res.status}`);
  }
  return res.json();
}

// football-data.org free tier gives full, untruncated standings (unlike
// TheSportsDB's free key, which caps lookuptable.php at 5 rows) but only
// for its own supported competitions — see FOOTBALL_DATA_LEAGUES in
// script.js for which of GoalHub's leagues that covers.
const FOOTBALL_DATA_BASE = "https://api.football-data.org/v4";
const ALLOWED_FOOTBALL_DATA_CODES = new Set(["PL", "PD", "SA", "FL1", "BL1", "DED", "PPL", "BSA"]);

async function footballDataFetch(env, path) {
  const res = await fetch(`${FOOTBALL_DATA_BASE}${path}`, {
    headers: { "X-Auth-Token": env.FOOTBALL_DATA_KEY }
  });
  if (!res.ok) {
    throw new Error(`football-data.org responded ${res.status}`);
  }
  return res.json();
}

// --- Auth: email magic-link login, no passwords. A signed HS256 JWT (hand
// rolled with Web Crypto — Workers has no Node `crypto`, and this is simple
// enough not to need a library) is the bearer credential; its jti maps to a
// row in user_sessions so a session can be revoked server-side even though
// the JWT itself is stateless. See schema.sql for the three tables involved.

const JWT_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const MAGIC_LINK_TTL_SECONDS = 60 * 15; // 15 minutes

function base64UrlEncode(bytes) {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function signJwt(payload, secret) {
  const header = { alg: "HS256", typ: "JWT" };
  const encHeader = base64UrlEncode(new TextEncoder().encode(JSON.stringify(header)));
  const encPayload = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const signingInput = `${encHeader}.${encPayload}`;
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(signingInput));
  const encSig = base64UrlEncode(new Uint8Array(sig));
  return `${signingInput}.${encSig}`;
}

// Returns the decoded payload if the signature and expiry are valid, else null.
// A malformed/garbage token (which any client can send, attacker or not) must
// never throw here — every failure mode below is a normal "reject it" case,
// not an exceptional one, so the whole thing is wrapped defensively.
async function verifyJwt(token, secret) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [encHeader, encPayload, encSig] = parts;
    const key = await hmacKey(secret);
    const valid = await crypto.subtle.verify(
      "HMAC", key, base64UrlDecode(encSig), new TextEncoder().encode(`${encHeader}.${encPayload}`)
    );
    if (!valid) return null;
    const payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(encPayload)));
    if (typeof payload.exp === "number" && Date.now() / 1000 > payload.exp) return null;
    return payload;
  } catch (err) {
    return null;
  }
}

function randomToken() {
  return base64UrlEncode(crypto.getRandomValues(new Uint8Array(32)));
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function handleSendMagicLink(request, env) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    return jsonResponse({ error: "invalid JSON body" }, 400);
  }
  const email = String(body.email || "").trim().toLowerCase();
  if (!isValidEmail(email)) return jsonResponse({ error: "invalid email" }, 400);

  const token = randomToken();
  const now = Math.floor(Date.now() / 1000);
  await env.goalhub_db
    .prepare("INSERT INTO magic_links (token, email, expires_at, created_at) VALUES (?, ?, ?, ?)")
    .bind(token, email, now + MAGIC_LINK_TTL_SECONDS, now)
    .run();

  const origin = request.headers.get("Origin") || "https://goalhub.pages.dev";
  const magicLink = `${origin}/?auth_token=${token}`;

  const emailSent = await sendMagicLinkEmail(env, email, magicLink);

  // Dev-mode fallback: if Resend isn't configured (or a send fails), return
  // the link directly so the login flow can still be tested end-to-end.
  // Once RESEND_API_KEY is set and sending works, this stops firing and the
  // link stops being exposed here.
  return jsonResponse({
    ok: true,
    emailSent,
    ...(emailSent ? {} : { devMagicLink: magicLink })
  });
}

// Resend's onboarding@resend.dev sender works with zero domain setup — the
// tradeoff (per Resend's own docs) is it can only deliver to the email
// address on the Resend account itself until a real domain is verified.
// Sending to any other address fails there, not in this code.
async function sendMagicLinkEmail(env, toEmail, magicLink) {
  if (!env.RESEND_API_KEY) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "GoalHub <onboarding@resend.dev>",
        to: toEmail,
        subject: "Your GoalHub Sign-in Link",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
            <h2 style="color: #0a1a12;">Sign in to GoalHub</h2>
            <p style="color: #444;">Click the button below to sign in. This link expires in 15 minutes.</p>
            <p style="text-align: center; margin: 32px 0;">
              <a href="${magicLink}" style="background: #00e676; color: #04140c; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Sign in to GoalHub</a>
            </p>
            <p style="color: #888; font-size: 13px;">If the button doesn't work, copy this link: <a href="${magicLink}">${magicLink}</a></p>
          </div>`,
        text: `Sign in to GoalHub: ${magicLink} (expires in 15 minutes)`
      })
    });
    if (!res.ok) {
      console.error("Resend send failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Resend send threw", err);
    return false;
  }
}

async function handleVerify(url, env) {
  const token = url.searchParams.get("token");
  if (!token) return jsonResponse({ error: "missing token" }, 400);

  const now = Math.floor(Date.now() / 1000);
  const link = await env.goalhub_db
    .prepare("SELECT * FROM magic_links WHERE token = ?")
    .bind(token)
    .first();

  if (!link || link.used || link.expires_at < now) {
    return jsonResponse({ error: "invalid or expired link" }, 401);
  }

  await env.goalhub_db.prepare("UPDATE magic_links SET used = 1 WHERE token = ?").bind(token).run();

  let user = await env.goalhub_db.prepare("SELECT * FROM users WHERE email = ?").bind(link.email).first();
  if (!user) {
    await env.goalhub_db
      .prepare("INSERT INTO users (email, created_at) VALUES (?, ?)")
      .bind(link.email, now)
      .run();
    user = await env.goalhub_db.prepare("SELECT * FROM users WHERE email = ?").bind(link.email).first();
  }

  const sessionId = randomToken();
  const expiresAt = now + JWT_TTL_SECONDS;
  await env.goalhub_db
    .prepare("INSERT INTO user_sessions (id, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
    .bind(sessionId, user.id, now, expiresAt)
    .run();

  const jwt = await signJwt({ sub: user.id, email: user.email, jti: sessionId, iat: now, exp: expiresAt }, env.JWT_SECRET);

  return jsonResponse({ token: jwt, user: { id: user.id, email: user.email } });
}

// Shared by /api/me and every future authenticated route: verifies the JWT,
// then confirms its session hasn't been revoked in D1 (the part a bare JWT
// verify alone can't do). Returns the user row or null.
async function authenticate(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const match = auth.match(/^Bearer (.+)$/);
  if (!match) return null;

  const payload = await verifyJwt(match[1], env.JWT_SECRET);
  if (!payload) return null;

  const session = await env.goalhub_db
    .prepare("SELECT * FROM user_sessions WHERE id = ? AND user_id = ?")
    .bind(payload.jti, payload.sub)
    .first();
  if (!session || session.revoked) return null;

  const user = await env.goalhub_db.prepare("SELECT * FROM users WHERE id = ?").bind(payload.sub).first();
  return user || null;
}

async function handleMe(request, env) {
  const user = await authenticate(request, env);
  if (!user) return jsonResponse({ error: "unauthorized" }, 401);
  return jsonResponse({ user: { id: user.id, email: user.email, createdAt: user.created_at } });
}

// --- Server-side favorite teams, synced across devices for signed-in users.
// team_name is the real unique key (see schema_favorites.sql) — most of
// GoalHub's roster has no TheSportsDB id at all, only fixtures do.

async function handleGetFavorites(request, env) {
  const user = await authenticate(request, env);
  if (!user) return jsonResponse({ error: "unauthorized" }, 401);
  const { results } = await env.goalhub_db
    .prepare("SELECT id, team_id, team_name, created_at FROM favorites_teams WHERE user_id = ? ORDER BY created_at DESC")
    .bind(user.id)
    .all();
  return jsonResponse({ favorites: results });
}

async function handlePostFavorite(request, env) {
  const user = await authenticate(request, env);
  if (!user) return jsonResponse({ error: "unauthorized" }, 401);

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return jsonResponse({ error: "invalid JSON body" }, 400);
  }
  const teamName = String(body.team_name || "").trim();
  const teamId = body.team_id != null ? String(body.team_id) : null;
  if (!teamName) return jsonResponse({ error: "team_name is required" }, 400);

  const now = Math.floor(Date.now() / 1000);
  // Idempotent: starring an already-favorited team just returns the existing
  // row instead of erroring, so the frontend doesn't need to pre-check.
  await env.goalhub_db
    .prepare(
      `INSERT INTO favorites_teams (user_id, team_id, team_name, created_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(user_id, team_name) DO UPDATE SET team_id = excluded.team_id`
    )
    .bind(user.id, teamId, teamName, now)
    .run();

  const row = await env.goalhub_db
    .prepare("SELECT id, team_id, team_name, created_at FROM favorites_teams WHERE user_id = ? AND team_name = ?")
    .bind(user.id, teamName)
    .first();

  return jsonResponse({ favorite: row }, 201);
}

async function handleDeleteFavorite(request, env, favoriteId) {
  const user = await authenticate(request, env);
  if (!user) return jsonResponse({ error: "unauthorized" }, 401);
  if (!favoriteId || !/^\d+$/.test(favoriteId)) return jsonResponse({ error: "invalid favorite id" }, 400);

  // Scoped to user_id too — without that, one user could delete another
  // user's row just by guessing/incrementing the numeric id.
  const result = await env.goalhub_db
    .prepare("DELETE FROM favorites_teams WHERE id = ? AND user_id = ?")
    .bind(favoriteId, user.id)
    .run();

  if (result.meta.changes === 0) return jsonResponse({ error: "not found" }, 404);
  return jsonResponse({ ok: true });
}

// --- Per-match chat + score-prediction room. One DO instance per match ID
// (via getByName), so each match gets its own isolated chat/prediction feed
// that naturally clears relevance once the match is old — no cross-match
// bleed, no single bottleneck DO handling every match at once.
export class ChatRoom extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    ctx.blockConcurrencyWhile(async () => {
      this.ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS messages (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          type TEXT NOT NULL,
          nickname TEXT NOT NULL,
          text TEXT,
          home_score INTEGER,
          away_score INTEGER,
          created_at INTEGER NOT NULL
        )
      `);
      // One row per nickname (PRIMARY KEY) — voting again just changes your
      // vote instead of stuffing the tally, no separate rate-limiting needed.
      this.ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS motm_votes (
          nickname TEXT PRIMARY KEY,
          player TEXT NOT NULL,
          updated_at INTEGER NOT NULL
        )
      `);
    });
  }

  async fetch(request) {
    const pair = new WebSocketPair();
    this.ctx.acceptWebSocket(pair[1]);

    const history = this.ctx.storage.sql
      .exec("SELECT * FROM messages ORDER BY id DESC LIMIT 50")
      .toArray()
      .reverse();
    pair[1].send(JSON.stringify({ type: "history", messages: history }));
    pair[1].send(JSON.stringify({ type: "motm_tally", votes: this.motmTally() }));

    return new Response(null, { status: 101, webSocket: pair[0] });
  }

  motmTally() {
    return this.ctx.storage.sql
      .exec("SELECT player, COUNT(*) as votes FROM motm_votes GROUP BY player ORDER BY votes DESC, player ASC")
      .toArray();
  }

  async webSocketMessage(ws, raw) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return;
    }

    const nickname = String(data.nickname || "Anonymous").trim().slice(0, 24) || "Anonymous";
    const createdAt = Date.now();

    if (data.type === "chat") {
      const text = String(data.text || "").trim().slice(0, 500);
      if (!text) return;
      const row = this.ctx.storage.sql
        .exec(
          "INSERT INTO messages (type, nickname, text, created_at) VALUES ('chat', ?, ?, ?) RETURNING *",
          nickname, text, createdAt
        )
        .one();
      this.broadcast({ type: "message", message: row });
    } else if (data.type === "prediction") {
      const home = Math.trunc(Number(data.homeScore));
      const away = Math.trunc(Number(data.awayScore));
      if (!Number.isFinite(home) || !Number.isFinite(away) || home < 0 || away < 0 || home > 30 || away > 30) return;
      const row = this.ctx.storage.sql
        .exec(
          "INSERT INTO messages (type, nickname, home_score, away_score, created_at) VALUES ('prediction', ?, ?, ?, ?) RETURNING *",
          nickname, home, away, createdAt
        )
        .one();
      this.broadcast({ type: "message", message: row });
    } else if (data.type === "motm") {
      const player = String(data.player || "").trim().slice(0, 40);
      if (!player) return;
      this.ctx.storage.sql.exec(
        `INSERT INTO motm_votes (nickname, player, updated_at) VALUES (?, ?, ?)
         ON CONFLICT(nickname) DO UPDATE SET player = excluded.player, updated_at = excluded.updated_at`,
        nickname, player, createdAt
      );
      this.broadcast({ type: "motm_tally", votes: this.motmTally() });
    }
  }

  async webSocketClose(ws, code, reason) {
    try { ws.close(code, reason); } catch (err) { /* already closing */ }
  }

  broadcast(payload) {
    const json = JSON.stringify(payload);
    for (const ws of this.ctx.getWebSockets()) {
      try {
        ws.send(json);
      } catch (err) {
        // dead socket — hibernation API cleans these up on its own
      }
    }
  }
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    if (url.pathname === "/chat") {
      const matchId = url.searchParams.get("match");
      if (!matchId) return new Response("missing match id", { status: 400 });
      if (request.headers.get("Upgrade") !== "websocket") {
        return new Response("expected websocket upgrade", { status: 426 });
      }
      const stub = env.CHAT_ROOM.getByName(matchId);
      return stub.fetch(request);
    }

    // Auth routes are per-request (POST bodies, bearer tokens) and never
    // cacheable, so they're handled before the GET-response cache below.
    if (
      (url.pathname === "/api/auth/send-magic-link" && request.method === "POST") ||
      (url.pathname === "/api/auth/verify" && request.method === "GET") ||
      (url.pathname === "/api/me" && request.method === "GET")
    ) {
      try {
        if (url.pathname === "/api/auth/send-magic-link") return await handleSendMagicLink(request, env);
        if (url.pathname === "/api/auth/verify") return await handleVerify(url, env);
        return await handleMe(request, env);
      } catch (err) {
        return jsonResponse({ error: "internal error" }, 500);
      }
    }

    if (url.pathname === "/api/user/favorites" || url.pathname.startsWith("/api/user/favorites/")) {
      try {
        if (url.pathname === "/api/user/favorites" && request.method === "GET") return await handleGetFavorites(request, env);
        if (url.pathname === "/api/user/favorites" && request.method === "POST") return await handlePostFavorite(request, env);
        if (request.method === "DELETE") {
          const favoriteId = url.pathname.slice("/api/user/favorites/".length);
          return await handleDeleteFavorite(request, env, favoriteId);
        }
        return jsonResponse({ error: "unknown endpoint" }, 404);
      } catch (err) {
        return jsonResponse({ error: "internal error" }, 500);
      }
    }

    const cache = caches.default;
    const cacheKey = new Request(request.url, request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    let payload;
    try {
      if (url.pathname === "/fixtures-by-date") {
        const dateStr = url.searchParams.get("date");
        const league = url.searchParams.get("league");
        const leagueId = LEAGUE_IDS[league];
        if (!dateStr || !leagueId) {
          return jsonResponse({ error: "missing or unrecognized date/league" }, 400);
        }
        const season = seasonForLeague(league, new Date(dateStr + "T00:00:00Z"));
        const data = await apiFootballFetch(env, `/fixtures?date=${dateStr}&league=${leagueId}&season=${season}`);
        payload = { fixtures: data.response || [] };
      } else if (url.pathname === "/team-fixtures") {
        const teamId = url.searchParams.get("team");
        if (!teamId) return jsonResponse({ error: "missing team id" }, 400);
        const [last, next] = await Promise.all([
          apiFootballFetch(env, `/fixtures?team=${teamId}&last=5`),
          apiFootballFetch(env, `/fixtures?team=${teamId}&next=1`)
        ]);
        payload = { last: last.response || [], next: next.response || [] };
      } else if (url.pathname === "/team-search") {
        const name = url.searchParams.get("name");
        if (!name) return jsonResponse({ error: "missing name" }, 400);
        const data = await apiFootballFetch(env, `/teams?search=${encodeURIComponent(name)}`);
        payload = { teams: data.response || [] };
      } else if (url.pathname === "/standings") {
        const competition = url.searchParams.get("competition");
        const season = url.searchParams.get("season");
        if (!competition || !season) return jsonResponse({ error: "missing competition/season" }, 400);
        if (!ALLOWED_FOOTBALL_DATA_CODES.has(competition)) return jsonResponse({ error: "unsupported competition" }, 400);
        const data = await footballDataFetch(env, `/competitions/${competition}/standings?season=${season}`);
        const total = (data.standings || []).find(s => s.type === "TOTAL");
        payload = { table: total ? total.table : [] };
      } else if (url.pathname === "/debug-raw") {
        // TEMPORARY: echoes the full, unfiltered upstream response (including
        // errors/paging/results metadata) so we can see exactly why a query
        // is coming back empty. Remove this route once fixtures are working.
        const rawPath = url.searchParams.get("path");
        if (!rawPath) return jsonResponse({ error: "missing path param" }, 400);
        payload = await apiFootballFetch(env, rawPath);
      } else {
        return jsonResponse({ error: "unknown endpoint" }, 404);
      }
    } catch (err) {
      return jsonResponse({ error: err.message }, 502);
    }

    // Cache each unique request at Cloudflare's edge for 2 minutes — long
    // enough to absorb a burst of visitors hitting the same day/team without
    // spending API-Football quota on every single page load, short enough
    // that scores don't go stale during a live match.
    const response = jsonResponse(payload, 200, { "Cache-Control": "public, max-age=120" });
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  }
};
