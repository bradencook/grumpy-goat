import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Logo from '../common/Logo';
import { useText } from '../../content/ContentContext';
import './Hero.css';

export default function Hero() {
  const t = useText();
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img
          src="/images/hero_rider.jpg"
          alt="Mountain biker riding a dirt trail through autumn foliage, captured with motion blur"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <Logo className="hero__logo" />
        <h1 className="hero__title">{t('site.name')}</h1>
        <p className="hero__subtitle">{t('site.tagline')}</p>
        <p className="hero__tagline">{t('site.description')}</p>
        <div className="hero__actions">
          <Link to="/gear">
            <Button variant="primary">{t('home.hero.button1')}</Button>
          </Link>
          <Link to="/grind">
            <Button variant="outline-light">{t('home.hero.button2')}</Button>
          </Link>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
