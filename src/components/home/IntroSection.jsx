import { useText } from '../../content/ContentContext';
import './IntroSection.css';

export default function IntroSection() {
  const t = useText();
  return (
    <section className="intro section">
      <div className="container">
        <div className="intro__grid">
          <div className="intro__text">
            <h2>{t('home.intro.title')}</h2>
            {t('home.intro.p1') && <p>{t('home.intro.p1')}</p>}
            {t('home.intro.p2') && <p>{t('home.intro.p2')}</p>}
          </div>
          <div className="intro__image-wrapper">
            <img
              src="/images/storefront-mountains.jpg"
              alt="Grumpy Goat storefront on Main Street with the Wasatch mountains behind it"
              className="intro__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
