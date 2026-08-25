// ---------------------------------------------------------------------------
// MANUAL DATA — edit this file directly (e.g. in GitHub's web editor) to add
// real data the free API can't fully provide. The site checks this file
// FIRST and only falls back to the (partial) live API data when nothing is
// listed here. Leave an entry out entirely if you don't have the data yet —
// it'll just use whatever the API gives.
//
// IMPORTANT: only enter real, verified data. Don't guess or invent squads,
// stats, or standings — that's worse than showing "partial data" honestly.
// ---------------------------------------------------------------------------

// --- Full squads, keyed by the exact team name used elsewhere on the site
// (see the team names in script.js's allTeams list). Free tier caps the API
// at ~10 players total (mixed with staff) per team, so this is where you'd
// add the rest by hand.
//
// Format per player: { number: "10", name: "Player Name", position: "Forward" }
// "position" just needs to contain one of: goalkeeper / back or defender /
// midfield / wing, forward, or striker — anything else is grouped as staff.
//
// Example (delete before filling in real data):
// const MANUAL_SQUADS = {
//   "Arsenal": [
//     { number: "1", name: "David Raya", position: "Goalkeeper" },
//     { number: "4", name: "Ben White", position: "Right-Back" },
//     { number: "7", name: "Bukayo Saka", position: "Right Winger" }
//   ]
// };
const MANUAL_SQUADS = {};

// --- Full league standings, for leagues the free API only gives a partial
// (5-row) table for: Saudi Pro, Super Lig, Scottish Prem, Russian PL, Super
// League GR, Jupiler Pro. (The other 8 leagues already get full standings
// from a different free source, so they don't need manual entries here.)
//
// Format per row: { pos, team, p (played), w (won), d (draw), l (lost),
// gd (goal difference), pts (points) }. "team" must match the exact name
// used elsewhere on the site so its badge shows correctly.
//
// Example (delete before filling in real data):
// const MANUAL_STANDINGS = {
//   "Scottish Prem": [
//     { pos: 1, team: "Celtic", p: 5, w: 5, d: 0, l: 0, gd: 12, pts: 15 },
//     { pos: 2, team: "Rangers", p: 5, w: 4, d: 0, l: 1, gd: 8, pts: 12 }
//   ]
// };
const MANUAL_STANDINGS = {};
