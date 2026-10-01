import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './StorySection.css';

// Hand-drawn style arrows for the notes
const ArrowToPhoto = () => (
  <svg className="story__arrow story__arrow--spencer" viewBox="0 0 120 60" aria-hidden="true">
    <path d="M115 40 C 90 55, 50 50, 12 22" />
    <path d="M12 22 L 30 24 M12 22 L 18 39" />
  </svg>
);

const ArrowToDog = () => (
  <svg className="story__arrow story__arrow--dog" viewBox="0 0 80 60" aria-hidden="true">
    <path d="M75 8 C 55 6, 25 18, 10 48" />
    <path d="M10 48 L 9 30 M10 48 L 25 39" />
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
            <ArrowToPhoto />
            {t('about.spencer.note')}
          </p>
        )}
        {t('about.hero.title') && <span className="story__label">{t('about.hero.title')}</span>}
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
              <ArrowToDog />
              <p className="story__note">{t('about.dog.title')}</p>
              {t('about.dog.note') && <p className="story__dog-text">{t('about.dog.note')}</p>}
            </div>
          </div>
        )}
      </div>
    </Split>
  );
}
