// Netlify Function: safe proxy to football-data.org for World Cup 2026.
// The API token lives only in the FOOTBALL_DATA_TOKEN env var (never the client).
// Only whitelisted resources are allowed — this is not an open proxy.
//
// Usage from the app:  /api/fd?resource=standings | matches | scorers
// (mapped to /.netlify/functions/fd by netlify.toml)

const ALLOWED = {
  standings: 'standings',
  matches: 'matches',
  scorers: 'scorers',
};
const TTL_MS = 60_000;          // serve cached upstream response for 60s (free tier = 10 req/min)
const cache = {};               // { resource: { ts, body } }

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8',
};

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors, body: '' };

  const resource = (event.queryStringParameters || {}).resource;
  const path = ALLOWED[resource];
  if (!path) {
    return { statusCode: 400, headers: cors,
      body: JSON.stringify({ error: 'invalid resource', allowed: Object.keys(ALLOWED) }) };
  }

  const token = process.env.FOOTBALL_DATA_TOKEN;
  // Return 200 with an error envelope (not 5xx) so the browser console stays clean
  // and the client simply falls back to ESPN/snapshot when the token isn't set yet.
  if (!token) {
    return { statusCode: 200, headers: cors,
      body: JSON.stringify({ ok: false, error: 'FOOTBALL_DATA_TOKEN not configured' }) };
  }

  const now = Date.now();
  const hit = cache[resource];
  if (hit && now - hit.ts < TTL_MS) {
    return { statusCode: 200, headers: { ...cors, 'Cache-Control': 'public, max-age=60', 'X-Cache': 'HIT' }, body: hit.body };
  }

  try {
    const res = await fetch(`https://api.football-data.org/v4/competitions/WC/${path}`, {
      headers: { 'X-Auth-Token': token },
    });
    const text = await res.text();
    if (!res.ok) {
      return { statusCode: 200, headers: cors,
        body: JSON.stringify({ ok: false, error: 'upstream error', status: res.status }) };
    }
    cache[resource] = { ts: now, body: text };
    return { statusCode: 200, headers: { ...cors, 'Cache-Control': 'public, max-age=60', 'X-Cache': 'MISS' }, body: text };
  } catch (e) {
    return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: false, error: 'fetch failed' }) };
  }
};
