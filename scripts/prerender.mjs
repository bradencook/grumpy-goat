// Runs after `vite build`. For each page in src/content/seo.js it:
//   - renders the page to static HTML (so Google and link previews see content)
//   - sets that page's <title>, description, canonical URL and og: tags
//   - adds LocalBusiness structured data (address, hours, phone) for Google
// and then writes sitemap.xml. Content comes from src/content/defaults.js;
// Spencer's sheet edits still load on top of it in the browser.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, defaults, pages, SITE_URL } = await import(path.join(ssrDir, 'entry-server.js'));
const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
const t = defaults.text;

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// "10:00 AM - 5:00 PM" -> ["10:00", "17:00"]; anything else (Closed, By appointment) -> null
function parseRange(hours) {
  const m = hours.match(/(\d{1,2}):?(\d{2})?\s*(AM|PM)\s*[-–]\s*(\d{1,2}):?(\d{2})?\s*(AM|PM)/i);
  if (!m) return null;
  const to24 = (h, min = '00', ap) => {
    let hh = Number(h) % 12;
    if (ap.toUpperCase() === 'PM') hh += 12;
    return `${String(hh).padStart(2, '0')}:${min}`;
  };
  return [to24(m[1], m[2], m[3]), to24(m[4], m[5], m[6])];
}

function openingHours(shop) {
  return defaults.hours
    .filter((r) => r.shop.toLowerCase().startsWith(shop))
    .map((r) => [r.day, parseRange(r.hours)])
    .filter(([, range]) => range)
    .map(([day, [opens, closes]]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${day}`,
      opens,
      closes,
    }));
}

const address = {
  '@type': 'PostalAddress',
  streetAddress: t['site.street'],
  addressLocality: t['site.city'],
  addressRegion: t['site.state'],
  postalCode: t['site.zip'],
  addressCountry: 'US',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BicycleStore',
  '@id': `${SITE_URL}/#shop`,
  name: t['site.name'],
  description: t['site.description'],
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/web-app-manifest-512x512.png`,
  telephone: t['site.phone'],
  email: t['site.email'],
  priceRange: '$$',
  address,
  openingHoursSpecification: openingHours('gear'),
  sameAs: [t['social.instagram'], t['social.facebook'], t['social.strava']].filter(Boolean),
  department: {
    '@type': 'CafeOrCoffeeShop',
    '@id': `${SITE_URL}/#grind`,
    name: `${t['site.name']} Grind`,
    url: `${SITE_URL}/grind`,
    telephone: t['site.phone'],
    servesCuisine: 'Coffee',
    address,
    openingHoursSpecification: openingHours('grind'),
  },
};

const jsonLd = `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`;

for (const [route, meta] of Object.entries(pages)) {
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const set = (value) => (_, before) => before + escapeAttr(value);
  const html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${escapeAttr(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, set(meta.description))
    .replace(/(<meta property="og:description" content=")[^"]*/, set(meta.description))
    .replace(/(<meta property="og:url" content=")[^"]*/, set(url))
    .replace(/(<link rel="canonical" href=")[^"]*/, set(url))
    .replace('</head>', () => `    ${jsonLd}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(route)}</div>`);

  // Cloudflare Pages serves gear.html at /gear (clean URL, no trailing slash)
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route} -> dist/${file}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pages)
  .map((route) => `  <url><loc>${SITE_URL}${route === '/' ? '/' : route}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('wrote dist/sitemap.xml');

rmSync(ssrDir, { recursive: true, force: true });
