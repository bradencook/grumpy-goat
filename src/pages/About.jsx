import PageHero from '../components/gear/PageHero';
import StorySection from '../components/about/StorySection';
import PhotoBand from '../components/common/PhotoBand';
import TopoSection from '../components/common/TopoSection';
import ValuesSection from '../components/about/ValuesSection';
import { useText } from '../content/ContentContext';

export default function About() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('about.hero.title')}
        image="/images/trail-mountains.jpg"
        alt="Riding singletrack above Willard at golden hour"
        focus="center 30%"
      />
      <TopoSection>
        <StorySection />
      </TopoSection>
      <PhotoBand
        image="/images/shop-dog.jpg"
        alt="The shop dog greeting customers at the door"
      />
      <ValuesSection />
    </div>
  );
}
