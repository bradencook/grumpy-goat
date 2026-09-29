import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Icon from '../common/Icon';
import { useContent, useText } from '../../content/ContentContext';
import './RentalsSection.css';

export default function RentalsSection() {
  const { rentals } = useContent();
  const t = useText();
  return (
    <section className="rentals section section--dark">
      <div className="container">
        <SectionHeader title={t('gear.rentals.title')} subtitle={t('gear.rentals.subtitle')} light />
        <div className="rentals__grid">
          {rentals.map((rental) => (
            <Card key={rental.title} variant="dark" className="rentals__card">
              {rental.icon && <span className="rentals__icon"><Icon name={rental.icon} /></span>}
              <h3 className="rentals__title">{rental.title}</h3>
              <p className="rentals__desc">{rental.description}</p>
              <div className="rentals__pricing">
                <div className="rentals__price-item">
                  <span className="rentals__price-label">Half Day</span>
                  <span className="rentals__price-value">{rental.half_day}</span>
                </div>
                <div className="rentals__price-item">
                  <span className="rentals__price-label">Full Day</span>
                  <span className="rentals__price-value">{rental.full_day}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
