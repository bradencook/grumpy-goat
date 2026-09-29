import './PageHero.css';

export default function PageHero({ title, subtitle, image, alt, focus = 'center' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__image-wrapper">
        <img src={image} alt={alt} className="page-hero__image" style={{ objectPosition: focus }} />
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__content container">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
