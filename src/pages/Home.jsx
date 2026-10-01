import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import TopoSection from '../components/common/TopoSection';
import PhotoBand from '../components/common/PhotoBand';
import FeaturedGear from '../components/home/FeaturedGear';
import FeaturedGrind from '../components/home/FeaturedGrind';

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <TopoSection>
        <IntroSection />
      </TopoSection>
      <FeaturedGear />
      <TopoSection>
        <FeaturedGrind />
        <PhotoBand
          flush
          image="/images/storefront-mountains.jpg"
          alt="Grumpy Goat storefront on Main Street with the Wasatch mountains behind it"
          focus="center 60%"
        />
      </TopoSection>
    </div>
  );
}
