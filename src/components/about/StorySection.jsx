import { useText } from '../../content/ContentContext';
import './StorySection.css';

export default function StorySection() {
  const t = useText();
  const paragraphs = ['about.story.p1', 'about.story.p2', 'about.story.p3'].map(t).filter(Boolean);

  return (
    <section className="story section">
      <div className="container">
        <div className="story__grid">
          <div className="story__content">
            <h2>{t('about.story.title')}</h2>
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="story__images">
            <img
              src="/images/spencer-portrait.jpg"
              alt="Spencer, owner of Grumpy Goat, in the shop"
              className="story__img story__img--main"
              loading="lazy"
            />
            <img
              src="/images/trail-dog.jpg"
              alt="The shop dog resting trailside"
              className="story__img story__img--secondary"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
