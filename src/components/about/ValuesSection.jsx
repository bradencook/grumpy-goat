import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './ValuesSection.css';

/** A row of small tiles summarizing what the shop stands for. */
export default function ValuesSection() {
  const { values } = useContent();
  const t = useText();
  return (
    <section className="values">
      <div className="container">
        {t('about.values.title') && <h2 className="values__title">{t('about.values.title')}</h2>}
        <ul className="values__grid">
          {values.map((value) => (
            <li key={value.title} className="values__tile">
              <span className="values__icon"><Icon name={value.icon} size={20} /></span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
