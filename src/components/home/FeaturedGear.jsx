import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useText } from '../../content/ContentContext';
import './FeaturedGear.css';

export default function FeaturedGear() {
  const t = useText();
  const highlights = [1, 2, 3, 4].map((n) => t(`home.gear.highlight${n}`)).filter(Boolean);

  return (
    <section className="featured-gear section section--dark">
      <div className="container">
        <div className="featured-gear__grid">
          <div className="featured-gear__images">
            <img
              src="/images/shop-interior.jpg"
              alt="Inside the Grumpy Goat bike shop, bikes and gear lining the walls"
              className="featured-gear__img featured-gear__img--main"
              loading="lazy"
            />
            <img
              src="/images/shop-dog.jpg"
              alt="The shop dog greeting customers at the door"
              className="featured-gear__img featured-gear__img--secondary"
              loading="lazy"
            />
            <img
              src="/images/spencer-wrenching.jpg"
              alt="Spencer working on a bike in the service bay"
              className="featured-gear__img featured-gear__img--secondary"
              loading="lazy"
            />
          </div>
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
        </div>
      </div>
    </section>
  );
}
