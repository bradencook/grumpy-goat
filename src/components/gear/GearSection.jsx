import SectionHeader from '../common/SectionHeader';
import { useText } from '../../content/ContentContext';
import './GearSection.css';

export default function GearSection() {
  const t = useText();
  return (
    <section className="gear-inventory section">
      <div className="container">
        <SectionHeader title={t('gear.inventory.title')} subtitle={t('gear.inventory.subtitle')} />
        <div className="gear-inventory__grid">
          <div className="gear-inventory__image-card">
            <img
              src="/images/shop-aisle.jpg"
              alt="Aisle of apparel, gloves, and accessories inside the shop"
              className="gear-inventory__img"
              loading="lazy"
            />
            <div className="gear-inventory__image-label">{t('gear.inventory.card1')}</div>
          </div>
          <div className="gear-inventory__image-card">
            <img
              src="/images/shop-through-wheel.jpg"
              alt="Parts and accessories on the shop floor, framed through a bike wheel"
              className="gear-inventory__img gear-inventory__img--portrait"
              loading="lazy"
            />
            <div className="gear-inventory__image-label">{t('gear.inventory.card2')}</div>
          </div>
        </div>
        {t('gear.inventory.note') && (
          <p className="gear-inventory__note text-center">{t('gear.inventory.note')}</p>
        )}
      </div>
    </section>
  );
}
