import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import Logo from '../common/Logo';
import SocialIcons from '../common/SocialIcons';
import { useText } from '../../content/ContentContext';
import './Footer.css';

export default function Footer() {
  const t = useText();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Logo className="footer__logo" />
            <h3 className="footer__name">{t('site.name')}</h3>
            <p className="footer__tagline">{t('site.tagline')}</p>
            <p className="footer__blurb">{t('site.description')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__link-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Visit Us</h4>
            <address className="footer__address">
              {t('site.street')}<br />
              {t('site.city')}, {t('site.state')} {t('site.zip')}
            </address>
            <p className="footer__contact-item">{t('site.phone')}</p>
            <p className="footer__contact-item">{t('site.email')}</p>
          </div>

          {/* Social */}
          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__social">
              <SocialIcons size={22} linkClassName="footer__social-link" />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {t('site.name')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
