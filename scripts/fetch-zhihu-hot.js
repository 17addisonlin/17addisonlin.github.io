#!/usr/bin/env node
/*
 * Fetches the Zhihu (知乎) hot list from the TopHub Data API and writes it to
 * _data/zhihu_hot.json so Jekyll can render it as a static list.
 *
 * The API key MUST come from the environment (TOPHUB_API_KEY) — it is never
 * committed to the repo or shipped to the browser. This script is meant to run
 * server-side inside GitHub Actions.
 *
 * Docs: https://www.tophubdata.com/documentation
 */

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.TOPHUB_API_KEY;
const ZHIHU_HASHID = 'mproPpoq6O'; // Zhihu 热榜 (from tophub.today/n/mproPpoq6O)
const ENDPOINT = `https://api.tophubdata.com/nodes/${ZHIHU_HASHID}`;
const OUT_FILE = path.join(__dirname, '..', '_data', 'zhihu_hot.json');
const MAX_ITEMS = 20;

if (!API_KEY) {
  console.error('ERROR: TOPHUB_API_KEY environment variable is not set.');
  process.exit(1);
}

async function main() {
  const res = await fetch(ENDPOINT, {
    headers: { Authorization: API_KEY },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }

  const body = await res.json();

  if (body.error || body.status !== 200 || !body.data) {
    throw new Error('API returned an error: ' + JSON.stringify(body));
  }

  const data = body.data;
  const items = (data.items || []).slice(0, MAX_ITEMS).map((item, index) => ({
    rank: index + 1,
    title: item.title || '',
    description: item.description || '',
    url: item.url || '',
    extra: item.extra || '',
    thumbnail: item.thumbnail || '',
  }));

  const output = {
    updated: new Date().toISOString(),
    name: data.name || '知乎',
    display: data.display || '热榜',
    domain: data.domain || 'zhihu.com',
    items: items,
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + '\n');
  console.log(`Wrote ${items.length} items to ${OUT_FILE} (updated ${output.updated})`);
}

main().catch((err) => {
  console.error('Failed to fetch Zhihu hot list:', err.message);
  process.exit(1);
});
