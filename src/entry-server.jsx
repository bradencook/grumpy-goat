/* eslint-disable react-refresh/only-export-components -- build-time module, never hot-reloaded */
// Build-time only: renders each page to static HTML so search engines and
// link previews see real content without running JavaScript.
// Used by scripts/prerender.mjs; never shipped to the browser.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import defaults from './content/defaults';
import { pages, SITE_URL } from './content/seo';

export { defaults, pages, SITE_URL };

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}
