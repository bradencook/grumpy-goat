import SectionHeader from '../common/SectionHeader';
import { useContent, useText } from '../../content/ContentContext';
import './MenuSection.css';

function formatPrice(price) {
  if (!price) return '';
  // Sheets turns "3.00" into 3, so re-pad plain numbers; leave anything else as typed.
  return /^\d+(\.\d+)?$/.test(price) ? `$${Number(price).toFixed(2)}` : price;
}

function MenuColumn({ title, items }) {
  return (
    <div className="menu__column">
      <h3 className="menu__column-title">{title}</h3>
      <ul className="menu__items">
        {items.map((item) => (
          <li key={item.name} className="menu__item">
            <span className="menu__item-name">{item.name}</span>
            <span className="menu__item-dots" />
            <span className="menu__item-price">{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MenuSection() {
  const { menu } = useContent();
  const t = useText();
  const bySection = (section) => menu.filter((item) => item.section?.toLowerCase() === section);

  return (
    <section className="menu section">
      <div className="container">
        <SectionHeader title={t('grind.menu.title')} subtitle={t('grind.menu.subtitle')} />
        <div className="menu__board">
          <MenuColumn title={t('grind.menu.hot')} items={bySection('hot')} />
          <div className="menu__divider" />
          <MenuColumn title={t('grind.menu.cold')} items={bySection('cold')} />
        </div>
      </div>
    </section>
  );
}
