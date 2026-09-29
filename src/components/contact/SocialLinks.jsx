import SocialIcons from '../common/SocialIcons';
import { useText } from '../../content/ContentContext';
import './SocialLinks.css';

export default function SocialLinks() {
  const t = useText();
  return (
    <section className="social-links section section--dark">
      <div className="container text-center">
        <h2 className="social-links__title">{t('contact.social.title')}</h2>
        <p className="social-links__subtitle">{t('contact.social.subtitle')}</p>
        <div className="social-links__icons">
          <SocialIcons size={32} linkClassName="social-links__link" showLabel />
        </div>
      </div>
    </section>
  );
}
