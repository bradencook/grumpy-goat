import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './StorySection.css';

// Hand-drawn style arrows. Each tip sits at the left edge of its SVG and
// overlaps the photo it points at.
const ArrowLeft = ({ className }) => (
  <svg className={`story__arrow ${className}`} viewBox="0 0 150 50" aria-hidden="true">
    <path d="M146 30 C 110 48, 60 44, 6 20" />
    <path d="M6 20 L 26 17 M6 20 L 17 36" />
  </svg>
);

const ArrowDownLeft = ({ className }) => (
  <svg className={`story__arrow ${className}`} viewBox="0 0 150 80" aria-hidden="true">
    <path d="M146 18 C 105 4, 45 14, 8 70" />
    <path d="M8 70 L 10 49 M8 70 L 27 61" />
  </svg>
);

const ArrowUp = ({ className }) => (
  <svg className={`story__arrow ${className}`} viewBox="0 0 50 80" aria-hidden="true">
    <path d="M44 74 C 20 66, 12 40, 20 6" />
    <path d="M20 6 L 9 22 M20 6 L 33 19" />
  </svg>
);

export default function StorySection() {
  const t = useText();
  const paragraphs = ['about.story.p1', 'about.story.p2', 'about.story.p3'].map(t).filter(Boolean);

  return (
    <Split
      className="story"
      image="/images/spencer-portrait.jpg"
      alt="Spencer, owner of Grumpy Goat, in the shop"
      focus="center 20%"
    >
      <div className="story__content">
        {t('about.spencer.note') && (
          <p className="story__note story__note--spencer">
            <ArrowDownLeft className="story__arrow--spencer-wide" />
            <ArrowUp className="story__arrow--spencer-narrow" />
            {t('about.spencer.note')}
          </p>
        )}
        <h1 className="story__title">{t('about.story.title')}</h1>
        {paragraphs.map((p) => <p key={p}>{p}</p>)}

        {t('about.dog.title') && (
          <div className="story__dog">
            <img
              src="/images/shop-dog.jpg"
              alt="The shop dog standing on the shop floor"
              className="story__dog-img"
              loading="lazy"
            />
            <div className="story__dog-note">
              <ArrowLeft className="story__arrow--dog" />
              <p className="story__note">{t('about.dog.title')}</p>
              {t('about.dog.note') && <p className="story__dog-text">{t('about.dog.note')}</p>}
            </div>
          </div>
        )}
      </div>
    </Split>
  );
}
