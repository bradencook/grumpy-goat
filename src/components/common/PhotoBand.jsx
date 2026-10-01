import './PhotoBand.css';

/**
 * A single full-width photo with breathing room above and below.
 * Children are laid over the photo as white text (e.g. a heading + paragraph).
 * `flush` drops the space below, for a photo that runs straight into the footer.
 */
export default function PhotoBand({ image, alt, focus = 'center', dark = false, flush = false, children }) {
  const classes = ['photo-band', dark && 'photo-band--dark', flush && 'photo-band--flush'].filter(Boolean).join(' ');
  return (
    <figure className={classes}>
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
