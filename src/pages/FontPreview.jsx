import './FontPreview.css';

const fonts = [
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", note: 'Bold, condensed, all-caps by nature. Action/outdoor brand feel.' },
  { name: 'Oswald', family: "'Oswald', sans-serif", note: 'Similar to Bebas but softer. Has lowercase and weight options.' },
  { name: 'Righteous', family: "'Righteous', sans-serif", note: 'Retro/groovy, more playful and unique personality.' },
  { name: 'Barlow Condensed', family: "'Barlow Condensed', sans-serif", note: 'Modern, clean, less shouty. Professional but friendly.' },
];

const samples = [
  { label: 'Hero Title', text: 'Grumpy Goat', size: 'clamp(2.5rem, 6vw, 4.5rem)' },
  { label: 'Section Header', text: 'Grumpy Goat Gear', size: 'clamp(1.8rem, 4vw, 2.5rem)' },
  { label: 'Card Title', text: 'Mountain Bike Rentals', size: '1.25rem' },
  { label: 'Nav Link', text: 'Home   Gear   Grinds   About   Contact', size: '1rem' },
];

export default function FontPreview() {
  return (
    <div className="font-preview page">
      <div className="container">
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: '2rem' }}>
          Font Comparison
        </h1>
        <p style={{ color: 'var(--color-charcoal-light)', marginBottom: '2rem' }}>
          Each row shows the same text in all four fonts. Pick your favorite and let me know.
        </p>

        {samples.map((sample) => (
          <div key={sample.label} className="font-preview__section">
            <h3 className="font-preview__label">{sample.label}</h3>
            <div className="font-preview__grid">
              {fonts.map((font) => (
                <div key={font.name} className="font-preview__card">
                  <span className="font-preview__font-name">{font.name}</span>
                  <p
                    className="font-preview__sample"
                    style={{ fontFamily: font.family, fontSize: sample.size }}
                  >
                    {sample.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="font-preview__section">
          <h3 className="font-preview__label">Side-by-Side Card Preview</h3>
          <div className="font-preview__grid">
            {fonts.map((font) => (
              <div key={font.name} className="font-preview__mock-card">
                <span className="font-preview__font-name">{font.name}</span>
                <h2 style={{ fontFamily: font.family, fontSize: '1.8rem', marginBottom: '0.25rem' }}>
                  The Bike & Ski Shop
                </h2>
                <p style={{ fontFamily: font.family, fontSize: '1.1rem', color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  GEAR & GRINDS
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6 }}>
                  Expert service, quality rentals, and great coffee under one roof in Willard, Utah.
                </p>
                <p className="font-preview__note">{font.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
