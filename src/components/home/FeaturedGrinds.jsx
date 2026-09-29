import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { useText } from '../../content/ContentContext';
import './FeaturedGrinds.css';

const FEATURE_ICONS = ['coffee', 'leaf', 'dog'];

export default function FeaturedGrinds() {
  const t = useText();
  return (
    <section className="featured-grinds section">
      <div className="container">
        <div className="featured-grinds__grid">
          <div className="featured-grinds__content">
            <span className="featured-grinds__label">{t('home.grinds.label')}</span>
            <h2>{t('home.grinds.title')}</h2>
            <p>{t('home.grinds.body')}</p>
            <div className="featured-grinds__features">
              {FEATURE_ICONS.map((icon, i) => {
                const title = t(`home.grinds.feature${i + 1}.title`);
                if (!title) return null;
                return (
                  <div className="featured-grinds__feature" key={icon}>
                    <span className="featured-grinds__feature-icon">
                      <Icon name={icon} size={20} />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{t(`home.grinds.feature${i + 1}.text`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link to="/grind">
              <Button variant="dark">{t('home.grinds.button')}</Button>
            </Link>
          </div>
          <div className="featured-grinds__images">
            <img
              src="/images/coffee-bar.jpg"
              alt="The coffee bar under a hand-painted mountain sunset mural"
              className="featured-grinds__img featured-grinds__img--main"
              loading="lazy"
            />
            <img
              src="/images/lounge-spencer-dog.jpg"
              alt="Spencer handing the shop dog a treat in the lounge"
              className="featured-grinds__img featured-grinds__img--accent"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
