/**
 * Writes one CSV per sheet tab into sheet-template/ from src/content/defaults.js.
 * Import them into Google Sheets (or use the generated .xlsx) to start the content sheet.
 *
 *   npm run sheet:template
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { hours, services, rentals, menu, values, textDescriptions } from '../src/content/defaults.js';

const outDir = new URL('../sheet-template/', import.meta.url);
mkdirSync(outDir, { recursive: true });

const cell = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
const toCsv = (headers, rows) =>
  [headers, ...rows.map((r) => headers.map((h) => r[h] ?? ''))].map((r) => r.map(cell).join(',')).join('\n') + '\n';

const tabs = {
  text: toCsv(['key', 'value', 'where'], textDescriptions.map(([key, value, where]) => ({ key, value, where }))),
  hours: toCsv(['shop', 'day', 'hours'], hours),
  services: toCsv(['icon', 'title', 'description', 'price'], services),
  rentals: toCsv(['icon', 'title', 'description', 'half_day', 'full_day'], rentals),
  menu: toCsv(['section', 'name', 'price'], menu),
  values: toCsv(['icon', 'title', 'description'], values),
};

for (const [name, csv] of Object.entries(tabs)) {
  writeFileSync(new URL(`${name}.csv`, outDir), csv);
  console.log(`sheet-template/${name}.csv`);
}
