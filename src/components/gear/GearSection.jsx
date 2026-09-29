import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './GearSection.css';

export default function GearSection() {
  const t = useText();
  const categories = [t('gear.inventory.card1'), t('gear.inventory.card2')].filter(Boolean);

  return (
    <Split
      reverse
      className="gear-inventory"
      image="/images/shop-through-wheel.jpg"
      alt="Parts and accessories on the shop floor, framed through a bike wheel"
      focus="center 25%"
    >
      <h2>{t('gear.inventory.title')}</h2>
      {t('gear.inventory.subtitle') && <p className="gear-inventory__subtitle">{t('gear.inventory.subtitle')}</p>}
      {categories.length > 0 && (
        <ul className="gear-inventory__categories">
          {categories.map((c) => <li key={c}>{c}</li>)}
        </ul>
      )}
      {t('gear.inventory.note') && <p className="gear-inventory__note">{t('gear.inventory.note')}</p>}
    </Split>
  );
}
