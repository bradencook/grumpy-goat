import './MountainDivider.css';

export default function MountainDivider({ from = 'light', to = 'dark' }) {
  const darkColor = 'var(--color-charcoal)';

  if (from === 'light' && to === 'dark') {
    // Light on top, dark on bottom — dark mountains rise from below
    return (
      <div className="mountain-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,80 L0,45 L120,55 L240,30 L360,50 L480,20 L600,40 L720,15 L840,35 L960,25 L1080,45 L1200,20 L1320,40 L1440,30 L1440,80 Z"
            fill={darkColor}
          />
        </svg>
      </div>
    );
  }

  // Dark on top, light on bottom — dark fills top, transparent below the ridge
  return (
    <div className="mountain-divider">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,0 L1440,0 L1440,30 L1320,40 L1200,20 L1080,45 L960,25 L840,35 L720,15 L600,40 L480,20 L360,50 L240,30 L120,55 L0,45 Z"
          fill={darkColor}
        />
      </svg>
    </div>
  );
}
