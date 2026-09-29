import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './FeaturedGear.css';

export default function FeaturedGear() {
  const t = useText();
  const highlights = [1, 2, 3, 4].map((n) => t(`home.gear.highlight${n}`)).filter(Boolean);

  return (
    <Split
      dark
      className="featured-gear"
      image="/images/spencer-wrenching.jpg"
      alt="Spencer working on a bike in the service bay"
      focus="center 30%"
    >
      <div className="featured-gear__content">
        <span className="featured-gear__label">{t('home.gear.label')}</span>
        <h2>{t('home.gear.title')}</h2>
        <p>{t('home.gear.body')}</p>
        {highlights.length > 0 && (
          <ul className="featured-gear__highlights">
            {highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        )}
        <Link to="/gear">
          <Button variant="primary">{t('home.gear.button')}</Button>
        </Link>
      </div>
    </Split>
  );
}
