import { createContext, useContext, useEffect, useState } from 'react';
import defaults from './defaults';
import { PUBLISHED_SHEET_ID } from './config';
import { loadSheet } from './sheet';

const CACHE_KEY = 'gg-content-v1';
const ContentContext = createContext(defaults);

function readCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    return cached ? { ...defaults, ...cached, text: { ...defaults.text, ...cached.text } } : null;
  } catch {
    return null;
  }
}

/**
 * Renders with cached sheet content (or defaults) immediately, then refreshes
 * from the Google Sheet in the background so edits show up without a redeploy.
 */
export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => (PUBLISHED_SHEET_ID && readCache()) || defaults);

  useEffect(() => {
    if (!PUBLISHED_SHEET_ID) return;
    let cancelled = false;
    loadSheet()
      .then((fresh) => {
        if (cancelled) return;
        setContent(fresh);
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(fresh)); } catch { /* storage full/blocked */ }
      })
      .catch((err) => console.warn('[content] sheet load failed, using defaults', err));
    return () => { cancelled = true; };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

/** Full content object: { text, hours, services, rentals, menu, values }. */
// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  return useContext(ContentContext);
}

/** Shortcut for the text tab: const t = useText(); t('home.intro.title') */
// eslint-disable-next-line react-refresh/only-export-components
export function useText() {
  const { text } = useContext(ContentContext);
  return (key) => text[key] ?? '';
}
