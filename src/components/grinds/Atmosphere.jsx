import { useText } from '../../content/ContentContext';
import './Atmosphere.css';

export default function Atmosphere() {
  const t = useText();
  return (
    <section className="atmosphere section section--dark">
      <div className="container">
        <div className="atmosphere__grid">
          <div className="atmosphere__content">
            <h2>{t('grinds.atmosphere.title')}</h2>
            <p>{t('grinds.atmosphere.body')}</p>
          </div>
          <div className="atmosphere__images">
            <img
              src="/images/lounge-couch.jpg"
              alt="The lounge: booths, a big couch, and the shop dog napping"
              className="atmosphere__img"
              loading="lazy"
            />
            <img
              src="/images/trail-dog-rider.jpg"
              alt="The shop dog leading a rider down the trail"
              className="atmosphere__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
