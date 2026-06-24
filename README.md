# World Cup 2026 — Complete Companion

One app that merges three previously separate World Cup 2026 tools into a single,
professionally‑designed experience:

| Area | What it does |
|------|--------------|
| **🏆 Tournament** (Wall Chart) | Interactive groups, knockout bracket, golden boot, dashboard, fixtures, tournament predictor, match log, prediction leagues (local + multiplayer via Supabase), squads, venues, fair play, AI score predictions, themes, social cards, live scores, PWA install. |
| **📊 Stats Desk** | Team discipline / bookings (cards, fouls), matchup heat, goal threat, top scorers, referee watchlist, disciplinary intel, a staking prediction tracker, plus live standings, knockout and results from football‑data.org. |
| **🎯 Fantasy** | Squad builder with live budget and nation limits, fixture difficulty (FDR), team form, captain picks, transfer planner and suggester, chips/boosters, optimum XI, points projection and strategy. |

A single top bar switches between the three areas; each keeps its own sub‑navigation.
One theme toggle (light / dark) drives the whole app.

## Architecture

This is a genuine integrated rebuild, not three iframes.

- **`index.html`** — unified shell (header, primary nav, theme) plus all three
  apps' markup and logic. Wall Chart runs in the global scope as the design base;
  Stats Desk and Fantasy each run inside an isolated IIFE so their colliding
  globals (`FIXTURES`, `PLAYERS`, `state`, …) never clash. Their CSS is scoped to
  their area container; their theming is driven from the shared `data-theme`.
- **`/data/`** — the Stats Desk datasets (`teams_array.js`, `intl_array.js`,
  `players_array.js`, `fixtures_array.js`, `qual_array.js`, `fd_standings.js`,
  `fd_extra.js`, `discipline.js`).
- Shared chrome (header, primary navigation, theme engine, fonts, CDN includes,
  CSP) is deduplicated; each area's specialised feature logic and data are kept
  intact.

`index.html` is generated from the three original apps by a local assembler
script (CSS scoping, IIFE isolation, id de‑collision, shell composition). The
deployable output — this folder — is self‑contained and needs no build step.

## Deploy

No client build step. For the **live data** feature (below) deploy via
**Git‑connected Netlify** so the serverless function ships:
Netlify → *Add new site → Import from Git → worldcup26* (publish dir `.`, no build
command — `netlify.toml` sets this). Without functions, drag‑and‑drop still works;
the app just uses the baked snapshot + ESPN fallback.

## Live data (Stats Desk)

The Stats Desk Standings / Knockout / Results refresh live from football‑data.org
through a serverless proxy that keeps the API key server‑side.

- **Function:** `netlify/functions/fd.mjs` — whitelisted proxy (`standings`,
  `matches`, `scorers`), reachable at `/api/fd?resource=…` (see `netlify.toml`).
- **Fallback chain:** proxy → **ESPN** (no key, computed client‑side) → baked
  snapshot. A pill in the Standings tab shows which is active (🔴 Live / 🟠 Live
  (ESPN) / ● Snapshot). The page never breaks if the proxy or key is absent.

**One‑time setup to enable the authoritative live feed:**
1. Get a free token at <https://www.football-data.org/client/register>.
2. In Netlify → *Site settings → Environment variables*, add
   **`FOOTBALL_DATA_TOKEN`** = your token, then redeploy.

Until then the app runs on the ESPN feed + snapshot automatically. `.env.example`
documents the variable; never commit a real token.

## Data persistence

Each area keeps its existing localStorage keys (`wc26v4`, `wc26_desk_v2`,
`wcfantasy_v6`), so anyone who used the original apps keeps their saved data.
The shared theme and last‑viewed area are stored under `wc26_theme` / `wc26_area`.
