import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './ServicesSection.css';

export default function ServicesSection() {
  const { services } = useContent();
  const t = useText();
  return (
    <section className="services section">
      <div className="container">
        <SectionHeader title={t('gear.services.title')} subtitle={t('gear.services.subtitle')} />
        <div className="services__grid">
          {services.map((service) => (
            <Card key={service.title} variant="gold-border" className="services__card">
              <span className="services__icon"><Icon name={service.icon} /></span>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.description}</p>
              <span className="services__price">{service.price}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
