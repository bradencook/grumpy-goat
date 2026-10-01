import { useText } from '../../content/ContentContext';
import './IntroSection.css';

export default function IntroSection() {
  const t = useText();
  return (
    <section className="intro section">
      <div className="container">
        <div className="intro__text">
          <h2>{t('home.intro.title')}</h2>
          {t('home.intro.p1') && <p>{t('home.intro.p1')}</p>}
          {t('home.intro.p2') && <p>{t('home.intro.p2')}</p>}
        </div>
      </div>
    </section>
  );
}
