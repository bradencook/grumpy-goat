# Grumpy Goat — Gear & Grind

Website for Grumpy Goat, bike & ski shop + coffee house in Willard, UT.
React + Vite static site. All text comes from a Google Sheet Spencer can edit; photos live in `public/images/`.

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve dist/ locally
```

---

## Editing text (Google Sheet)

Every piece of copy on the site (headings, paragraphs, hours, prices, services, menu, social links) is loaded from a Google Sheet at page load. Editing the sheet updates the live site in about 5 minutes (that's Google's cache on published sheets). No redeploy is needed.

If the sheet can't be reached, or `PUBLISHED_SHEET_ID` is blank, the site falls back to `src/content/defaults.js`, so it never shows up empty.

### One-time setup

1. Sign into **Spencer's** Google account and go to [sheets.new](https://sheets.new).
2. **File → Import → Upload** `sheet-template/Grumpy Goat Website Content.xlsx`, then choose **Replace spreadsheet**. You get a README tab plus `text`, `hours`, `services`, `rentals`, `menu`, and `values`.
3. **File → Share → Publish to web**: choose *Entire document* and *Comma-separated values (.csv)*, then **Publish**.
4. Copy the link it shows. It looks like `https://docs.google.com/spreadsheets/d/e/2PACX-1vXXXX.../pub?output=csv`.
5. Paste the `2PACX-...` part (between `/d/e/` and `/pub`) into `src/content/config.js` as `PUBLISHED_SHEET_ID`.
6. Fill in each tab's gid in `TABS` in `config.js`. That's the number after `#gid=` in the sheet URL while the tab is open. Published CSVs can only pick a tab by gid, not by name. Build and deploy.

Already done for the live sheet. Renaming a tab is safe (gids don't change). Deleting and re-creating a tab gives it a new gid, and the site will fall back to defaults for that tab until `config.js` is updated. You'll see `[content] using defaults for "..."` in the browser console.

### Rules for editing (also in the sheet's README tab)

- **text tab**: only edit the `value` column. The `key` is how the site finds each spot, and `where` says where it shows up.
- Blank value = hidden (a bullet, a paragraph, a social link).
- List tabs: add, remove, or reorder rows freely. Site order follows sheet order.
- `hours.shop` is `gear` or `grind`. `menu.section` is `hot` or `cold`.
- `icon` columns take one of: `bike tire spoke sealant cog wrench hammer suspension shock warranty target mountain ski snowflake waves trees leaf sun coffee dog paw handshake heart people apparel package sparkles star`. More can be added in `src/components/common/Icon.jsx` from [lucide.dev](https://lucide.dev/icons).

### Adding a new text field in code

1. Add a `[key, value, where]` row to `textRows` in `src/content/defaults.js`.
2. Use it in a component: `const t = useText(); t('my.new.key')`.
3. Add the same row to the live sheet. Or run `npm run sheet:template` to regenerate the CSVs in `sheet-template/` and copy the row over. Existing sheets don't pick up new keys automatically; until the row is added there, the default shows.

---

## Photos

From the shoot (originals in `~/Desktop/GG photos`), resized to ≤1600px for web (hero 2000px).
Layout is "one big photo at a time" with breathing room: full-width `<PhotoBand>`s (padded top and
bottom, optionally with white text laid over them) and `<Split>` sections (text on one side, one photo
inset by the same gutter on the other).

| Where | File | Original |
|---|---|---|
| Home hero | `hero_rider.jpg` | (Braden's pick) |
| Home: "More Than a Bike Shop" (text over photo) | `storefront-mountains.jpg` | DSC07110 |
| Home: Bike shop split | `spencer-wrenching.jpg` | DSC07286 |
| Home: Coffee shop split | `lounge-spencer-dog.jpg` | DSC07277 |
| Home: full-width before footer | `coffee-bar.jpg` | DSC07300 |
| Gear banner | `tool-wall.jpg` | DSC07142 |
| Gear: Gear & Accessories split | `shop-through-wheel.jpg` | DSC07183 |
| Grind banner | `trail-dog-rider.jpg` | DSC07456 |
| Grind: "More Than Coffee" (text over photo) | `lounge-couch.jpg` | DSC07316 |
| About: Our Story split | `spencer-portrait.jpg` | DSC07257 |
| About: "The MVP" round photo | `shop-dog.jpg` | DSC07152 |
| Contact banner | `storefront-vintage-bike.jpg` | DSC07100 |

To swap one, drop a new file in `public/images/` and change the `image` prop in the page/component.
Focal points use the `focus` prop (e.g. `focus="center 30%"`) on `<PageHero>`, `<PhotoBand>`, and `<Split>`.
The old placeholder images are in `_old-placeholders/` (gitignored).

Good unused shots if you want more: `public/images/` has `trail-dog.jpg` (DSC07477), `shop-interior.jpg` (DSC07181), `shop-aisle.jpg` (DSC07180), `coffee-bar-mural.jpg` (DSC07296), `trail-mountains.jpg` (DSC07375); also DSC07093 (storefront, portrait), DSC07130 (front door), DSC07219 (Spencer at tool wall), DSC07376 / 07464 (riding action), DSC07352 (rider portrait).

---

## Hosting: Cloudflare Pages (free)

Why Cloudflare Pages: free with unlimited bandwidth, supports the existing `public/_redirects` SPA rule, free SSL, and it can manage the domain's DNS in the same dashboard.

### Deploy

**Option A (recommended): GitHub auto-deploy**
1. Push this project to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, then pick the repo.
3. Framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. Every push to `main` redeploys. Only code and photo changes need a push; text changes come from the sheet.

**Option B: manual upload**
```bash
npm run build
npx wrangler pages deploy dist --project-name grumpy-goat
```

### Pointing the domain (Squarespace → Cloudflare)

The domain's registration can stay at Squarespace. Only its DNS moves to Cloudflare. **Google Workspace email keeps working as long as the MX/TXT records come over. Check them before switching nameservers (step 3).**

1. Cloudflare dashboard → **Add a domain** → enter the domain → Free plan. Cloudflare scans and imports the existing DNS records.
2. Log into Squarespace → **Domains** → the domain → **DNS**. Screenshot every record as a backup.
3. Compare against what Cloudflare imported. Make sure these exist in Cloudflare exactly as in Squarespace, and add any that are missing:
   - **MX**: either `smtp.google.com` (priority 1), or the older set `aspmx.l.google.com` (1), `alt1/alt2.aspmx.l.google.com` (5), `alt3/alt4.aspmx.l.google.com` (10).
   - **TXT** `@`: `v=spf1 include:_spf.google.com ~all`
   - **TXT** `google._domainkey`: the DKIM key (long `v=DKIM1; k=rsa; p=...`)
   - **TXT** `_dmarc`, if one exists
   - Any `google-site-verification=...` TXT
   - Set all of these to **DNS only** (grey cloud), not proxied.
4. Delete any old Squarespace website records in Cloudflare (A records to `198.185.159.x`/`198.49.23.x`, CNAME `www` → `ext-cust.squarespace.com`).
5. In Squarespace → Domains → the domain → **Nameservers** → *Use custom nameservers* → enter the two Cloudflare gives you. Also turn off DNSSEC in Squarespace first if it's on.
6. Wait for Cloudflare to say the domain is **Active** (minutes to a few hours).
7. Pages project → **Custom domains** → add `grumpygoat.bike` and `www.grumpygoat.bike`. Cloudflare creates the records.
8. Send a test email to Spencer's address and reply from it to confirm mail still flows.
9. Once the new site is live, cancel the Squarespace **website** subscription. **Don't cancel the domain**; it still renews there. (Optional: transfer the registration to Cloudflare Registrar later for at-cost renewal. Unlock the domain in Squarespace, get the auth code, then Cloudflare → Domain Registration → Transfer.)

---

## SEO

- **Page titles & Google snippets** live in `src/content/seo.js` (code, not the sheet — they rarely change).
- **`npm run build` prerenders** every page to static HTML (`scripts/prerender.mjs`), so Google and link
  previews see real content, per-page titles, canonical URLs, and `LocalBusiness` structured data
  (address, phone, hours from `defaults.js`). It also writes `sitemap.xml`. Sheet edits still load on top in the browser.
- Adding a page? Add its route in `src/App.jsx` **and** an entry in `seo.js`.
- `public/_redirects` intentionally has **no** `/* /index.html 200` catch-all — it would override the
  prerendered pages. Cloudflare Pages falls back to `index.html` on its own when there's no `404.html`.
- Off-site (biggest impact for a local shop): Google Business Profile, Google Search Console (submit
  `https://grumpygoat.bike/sitemap.xml`), Apple Business Connect, Bing Places, Yelp, Strava/Trailforks shop listings.

## Project layout

```
src/
  content/
    defaults.js         fallback copy of all sheet content (source of truth for the template)
    config.js           PUBLISHED_SHEET_ID + tab names/gids
    sheet.js            fetch + CSV parse + merge-over-defaults
    ContentContext.jsx  <ContentProvider>, useContent(), useText()
  components/
    common/Icon.jsx         icon-name -> lucide icon map (used by sheet "icon" columns)
    common/SocialIcons.jsx  Instagram / Facebook / Strava links (hidden if blank)
    ...
  pages/                Home, Gear, Grind, About, Contact (+ /fonts dev preview)
scripts/export-sheet.mjs  npm run sheet:template -> sheet-template/*.csv
sheet-template/           CSVs + importable .xlsx for the Google Sheet
```
