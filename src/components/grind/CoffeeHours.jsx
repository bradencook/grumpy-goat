import SectionHeader from '../common/SectionHeader';
import { useContent, useText } from '../../content/ContentContext';
import './CoffeeHours.css';

export default function CoffeeHours() {
  const { hours } = useContent();
  const t = useText();
  return (
    <section className="coffee-hours section">
      <div className="container">
        <SectionHeader title={t('grind.hours.title')} subtitle={t('grind.hours.subtitle')} />
        <div className="coffee-hours__table-wrapper">
          <table className="coffee-hours__table">
            <tbody>
              {hours.filter((row) => row.shop?.toLowerCase().startsWith('grind')).map((row) => (
                <tr key={row.day} className={row.hours.toLowerCase() === 'closed' ? 'coffee-hours__closed' : ''}>
                  <td className="coffee-hours__day">{row.day}</td>
                  <td className="coffee-hours__time">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
