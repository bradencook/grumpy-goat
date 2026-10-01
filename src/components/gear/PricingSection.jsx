import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './PricingSection.css';

function PriceList({ title, subtitle, items, price }) {
  return (
    <div className="pricing__col">
      <h2 className="pricing__heading">{title}</h2>
      {subtitle && <p className="pricing__subtitle">{subtitle}</p>}
      <ul className="pricing__list">
        {items.map((item) => (
          <li key={item.title} className="pricing__item">
            <span className="pricing__icon"><Icon name={item.icon} size={22} /></span>
            <div>
              <h3 className="pricing__title">{item.title}</h3>
              {item.description && <p className="pricing__desc">{item.description}</p>}
              <p className="pricing__price">{price(item)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Services on the left, rentals on the right: every price on one screen. */
export default function PricingSection() {
  const { services, rentals } = useContent();
  const t = useText();
  return (
    <section className="pricing section">
      <div className="container pricing__grid">
        <PriceList
          title={t('gear.services.title')}
          subtitle={t('gear.services.subtitle')}
          items={services}
          price={(s) => s.price}
        />
        <PriceList
          title={t('gear.rentals.title')}
          subtitle={t('gear.rentals.subtitle')}
          items={rentals}
          price={(r) => [r.half_day && `Half day ${r.half_day}`, r.full_day && `Full day ${r.full_day}`]
            .filter(Boolean)
            .join('  ·  ')}
        />
      </div>
    </section>
  );
}
