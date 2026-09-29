import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import FeaturedGear from '../components/home/FeaturedGear';
import FeaturedGrinds from '../components/home/FeaturedGrinds';

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <TopoSection>
        <IntroSection />
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <FeaturedGear />
      <TopoSection>
        <MountainDivider from="dark" to="light" />
        <FeaturedGrinds />
      </TopoSection>
    </div>
  );
}
