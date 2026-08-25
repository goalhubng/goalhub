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
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
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
