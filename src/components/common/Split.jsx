import './Split.css';

/**
 * Half text, half one big photo that runs to the edge of the screen.
 * `reverse` puts the photo on the right; `dark` uses the charcoal background.
 */
export default function Split({ image, alt, focus = 'center', reverse = false, dark = false, className = '', children }) {
  const classes = ['split', reverse && 'split--reverse', dark && 'split--dark section--dark', className]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={classes}>
      <div className="split__media">
        <img src={image} alt={alt} className="split__img" style={{ objectPosition: focus }} loading="lazy" />
      </div>
      <div className="split__body">
        <div className="split__inner">{children}</div>
      </div>
    </section>
  );
}
