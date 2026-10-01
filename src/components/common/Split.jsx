import './Split.css';

/**
 * Half text, half one big photo with a frame of space around it.
 * `reverse` puts the photo on the right; `dark` uses the charcoal background.
 * `aside` renders under the photo (e.g. a handwritten note).
 */
export default function Split({ image, alt, focus = 'center', reverse = false, dark = false, className = '', aside, children }) {
  const classes = ['split', reverse && 'split--reverse', dark && 'split--dark section--dark', className]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={classes}>
      <div className="split__media">
        <div className="split__frame">
          <img src={image} alt={alt} className="split__img" style={{ objectPosition: focus }} loading="lazy" />
        </div>
        {aside}
      </div>
      <div className="split__body">
        <div className="split__inner">{children}</div>
      </div>
    </section>
  );
}
