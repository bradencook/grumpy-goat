import './PhotoBand.css';

/** A single full-width photo that gets the whole screen to itself. */
export default function PhotoBand({ image, alt, focus = 'center' }) {
  return (
    <figure className="photo-band">
      <img src={image} alt={alt} className="photo-band__img" style={{ objectPosition: focus }} loading="lazy" />
    </figure>
  );
}
