import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './PricingSection.css';

function PriceList({ title, subtitle, items, price = () => null, note }) {
  return (
    <div className="pricing__block">
      <h2 className="pricing__heading">{title}</h2>
      {subtitle && <p className="pricing__subtitle">{subtitle}</p>}
      <ul className="pricing__list">
        {items.map((item) => (
          <li key={item.title} className="pricing__item">
            <span className="pricing__icon"><Icon name={item.icon} size={22} /></span>
            <div>
              <h3 className="pricing__title">{item.title}</h3>
              {item.description && <p className="pricing__desc">{item.description}</p>}
              {price(item) && <p className="pricing__price">{price(item)}</p>}
            </div>
          </li>
        ))}
      </ul>
      {note && <p className="pricing__note">{note}</p>}
    </div>
  );
}

/** Services on the left; rentals and gear & accessories on the right. */
export default function PricingSection() {
  const { services, rentals } = useContent();
  const t = useText();
  const gear = [
    { icon: 'apparel', title: t('gear.inventory.card1') },
    { icon: 'package', title: t('gear.inventory.card2') },
  ].filter((g) => g.title);

  return (
    <section className="pricing section">
      <div className="container pricing__grid">
        <PriceList
          title={t('gear.services.title')}
          subtitle={t('gear.services.subtitle')}
          items={services}
          price={(s) => s.price}
        />
        <div className="pricing__col">
          <PriceList
            title={t('gear.rentals.title')}
            subtitle={t('gear.rentals.subtitle')}
            items={rentals}
            price={(r) => [r.half_day && `Half day ${r.half_day}`, r.full_day && `Full day ${r.full_day}`]
              .filter(Boolean)
              .join('  ·  ')}
          />
          <PriceList
            title={t('gear.inventory.title')}
            subtitle={t('gear.inventory.subtitle')}
            items={gear}
            note={t('gear.inventory.note')}
          />
        </div>
      </div>
    </section>
  );
}
