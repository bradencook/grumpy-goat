import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Icon from '../common/Icon';
import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './FeaturedGrind.css';

const FEATURE_ICONS = ['coffee', 'leaf', 'dog'];

export default function FeaturedGrind() {
  const t = useText();
  return (
    <Split
      reverse
      className="featured-grind"
      image="/images/lounge-spencer-dog.jpg"
      alt="Spencer handing the shop dog a treat in the lounge"
    >
      <div className="featured-grind__content">
        <span className="featured-grind__label">{t('home.grind.label')}</span>
        <h2>{t('home.grind.title')}</h2>
        <p>{t('home.grind.body')}</p>
        <div className="featured-grind__features">
          {FEATURE_ICONS.map((icon, i) => {
            const title = t(`home.grind.feature${i + 1}.title`);
            if (!title) return null;
            return (
              <div className="featured-grind__feature" key={icon}>
                <span className="featured-grind__feature-icon">
                  <Icon name={icon} size={20} />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{t(`home.grind.feature${i + 1}.text`)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/grind">
          <Button variant="dark">{t('home.grind.button')}</Button>
        </Link>
      </div>
    </Split>
  );
}
