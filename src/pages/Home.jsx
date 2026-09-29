import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import FeaturedGear from '../components/home/FeaturedGear';
import FeaturedGrind from '../components/home/FeaturedGrind';

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
        <FeaturedGrind />
      </TopoSection>
    </div>
  );
}
