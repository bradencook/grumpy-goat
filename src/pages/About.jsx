import PageHero from '../components/gear/PageHero';
import StorySection from '../components/about/StorySection';
import MountainDivider from '../components/common/MountainDivider';
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
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <ValuesSection />
    </div>
  );
}
