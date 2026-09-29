import './SectionHeader.css';

export default function SectionHeader({ title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      <div className="section-header__accent" />
    </div>
  );
}
