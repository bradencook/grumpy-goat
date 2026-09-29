import Split from '../common/Split';
import { useText } from '../../content/ContentContext';
import './StorySection.css';

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
        <h2>{t('about.story.title')}</h2>
        {paragraphs.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Split>
  );
}
