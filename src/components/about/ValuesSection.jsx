import Card from '../common/Card';
import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './ValuesSection.css';

export default function ValuesSection() {
  const { values } = useContent();
  const t = useText();
  return (
    <section className="values section section--dark">
      <div className="container">
        <h2 className="values__title text-center">{t('about.values.title')}</h2>
        <div className="values__grid">
          {values.map((value) => (
            <Card key={value.title} variant="dark" className="values__card">
              <span className="values__icon"><Icon name={value.icon} size={30} /></span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
