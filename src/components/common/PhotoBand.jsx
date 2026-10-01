import './PhotoBand.css';

/**
 * A single full-width photo with breathing room above and below.
 * Children are laid over the photo as white text (e.g. a heading + paragraph).
 */
export default function PhotoBand({ image, alt, focus = 'center', dark = false, children }) {
  return (
    <figure className={`photo-band${dark ? ' photo-band--dark' : ''}`}>
      <div className={`photo-band__frame${children ? ' photo-band__frame--overlay' : ''}`}>
        <img src={image} alt={alt} className="photo-band__img" style={{ objectPosition: focus }} loading="lazy" />
        {children && (
          <figcaption className="photo-band__caption">
            <div className="photo-band__text">{children}</div>
          </figcaption>
        )}
      </div>
    </figure>
  );
}
