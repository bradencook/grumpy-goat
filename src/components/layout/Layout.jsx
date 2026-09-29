import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { pages, SITE_URL } from '../../content/seo';
import './Layout.css';

function setMeta(selector, attr, value) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = pages[pathname];
    if (!meta) return;
    const url = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [pathname]);

  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
