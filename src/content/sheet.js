import defaults from './defaults.js';
import { PUBLISHED_SHEET_ID, TABS } from './config.js';

/** Minimal RFC 4180 CSV parser (quoted fields, escaped quotes, newlines in cells). */
export function parseCsv(csv) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    if (quoted) {
      if (c === '"' && csv[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && csv[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/** First row is headers; returns array of objects, skipping fully blank rows. */
export function toObjects(csv) {
  const [headers = [], ...rows] = parseCsv(csv);
  const keys = headers.map((h) => h.trim().toLowerCase());
  return rows
    .filter((r) => r.some((cell) => cell.trim()))
    .map((r) => Object.fromEntries(keys.map((k, i) => [k, (r[i] ?? '').trim()])));
}

/**
 * Merge parsed tabs ({ text: rows, hours: rows, ... }) over defaults. The text
 * tab overrides key-by-key (a key present with a blank value means "hide it").
 * List tabs replace the default list wholesale, but only if non-empty.
 */
export function mergeContent(tabs) {
  const content = { ...defaults, text: { ...defaults.text } };
  for (const [tab, rows] of Object.entries(tabs)) {
    if (!rows) continue;
    if (tab === 'text') {
      rows.forEach(({ key, value }) => { if (key) content.text[key] = value ?? ''; });
    } else if (rows.length) {
      content[tab] = rows;
    }
  }
  return content;
}

async function fetchTab(tab, gid) {
  const url = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_SHEET_ID}/pub?output=csv&single=true&gid=${gid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${tab}: HTTP ${res.status}`);
  return toObjects(await res.text());
}

/** Fetch every tab; any tab that fails keeps its defaults. */
export async function loadSheet() {
  const entries = Object.entries(TABS);
  const results = await Promise.allSettled(entries.map(([tab, gid]) => fetchTab(tab, gid)));
  const tabs = {};
  results.forEach((result, i) => {
    const [tab] = entries[i];
    if (result.status === 'fulfilled') tabs[tab] = result.value;
    else console.warn(`[content] using defaults for "${tab}"`, result.reason);
  });
  return mergeContent(tabs);
}
