import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { useContent, useText } from '../../content/ContentContext';
import './ContactInfo.css';

function HoursTable({ rows, mutedWhen }) {
  return (
    <table className="contact-info__hours">
      <tbody>
        {rows.map((row) => (
          <tr key={row.day} className={row.hours.toLowerCase() === mutedWhen ? 'contact-info__muted' : ''}>
            <td>{row.day}</td>
            <td>{row.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ContactInfo() {
  const { hours } = useContent();
  const t = useText();
  const phone = t('site.phone');
  const email = t('site.email');
  const address = `${t('site.street')}, ${t('site.city')}, ${t('site.state')} ${t('site.zip')}`;

  return (
    <section className="contact-info section">
      <div className="container">
        <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <div className="contact-info__grid">
          <div className="contact-info__card">
            <h3>{t('contact.location')}</h3>
            <address className="contact-info__address">
              {t('site.street')}<br />
              {t('site.city')}, {t('site.state')} {t('site.zip')}
            </address>
            <div className="contact-info__methods">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                className="contact-info__method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={20} aria-hidden="true" />
                Get directions
              </a>
              {phone && (
                <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="contact-info__method">
                  <Phone size={20} aria-hidden="true" />
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="contact-info__method">
                  <Mail size={20} aria-hidden="true" />
                  {email}
                </a>
              )}
            </div>
          </div>

          <div className="contact-info__card">
            <h3>{t('contact.gearHours')}</h3>
            <HoursTable rows={hours.filter((r) => r.shop?.toLowerCase() === 'gear')} mutedWhen="by appointment" />
            {t('contact.gearNote') && <p className="contact-info__note">{t('contact.gearNote')}</p>}
          </div>

          <div className="contact-info__card">
            <h3>{t('contact.grindsHours')}</h3>
            <HoursTable rows={hours.filter((r) => r.shop?.toLowerCase().startsWith('grind'))} mutedWhen="closed" />
          </div>
        </div>
      </div>
    </section>
  );
}
