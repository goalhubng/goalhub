# GoalHub API proxy

A tiny Cloudflare Worker that holds your API-Football key server-side and
proxies the handful of requests GoalHub needs, so the key is never exposed
in the browser.

## Setup

Node.js and Wrangler are already installed (Wrangler is a local dependency
of this folder, not global — that's why every command below is prefixed
`npx`). Run all of these from inside `api-proxy`.

1. ✅ Get an API-Football key — done (sign up at https://www.api-football.com,
   key is on your dashboard).

2. Log in to Cloudflare (opens a browser to authenticate — sign up free at
   https://dash.cloudflare.com/sign-up first if you don't have an account):
   ```
   npx wrangler login
   ```

3. Store your API-Football key as a secret (never goes in any file, never
   gets committed — Wrangler prompts you to paste it, and it's stored
   encrypted on Cloudflare's side, not visible in your code):
   ```
   npx wrangler secret put API_FOOTBALL_KEY
   ```

4. Deploy:
   ```
   npx wrangler deploy
   ```
   Wrangler prints your live Worker URL, something like
   `https://goalhub-api-proxy.YOUR-SUBDOMAIN.workers.dev` — send that back
   so it can be wired into `script.js`.

## Verifying it works

Once deployed, visiting this in a browser should return real fixture JSON
(swap in today's date):

```
https://goalhub-api-proxy.YOUR-SUBDOMAIN.workers.dev/fixtures-by-date?date=2026-08-24&league=Premier%20League
```

If it returns `{"fixtures":[]}` for a date/league you know has real
matches, the league ID mapping in `worker.js` is probably off for that
league — check it against API-Football's `/leagues` reference.

## Local testing (optional)

```
npx wrangler dev
```
Runs the Worker on `localhost` with the same secret, useful for testing
changes before deploying.
