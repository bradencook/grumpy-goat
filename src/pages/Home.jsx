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
      <PhotoBand
        image="/images/storefront-mountains.jpg"
        alt="Grumpy Goat storefront on Main Street with the Wasatch mountains behind it"
        focus="center 60%"
      />
      <FeaturedGear />
      <PhotoBand
        image="/images/shop-interior.jpg"
        alt="Inside the Grumpy Goat bike shop, bikes and gear lining the walls"
      />
      <TopoSection>
        <FeaturedGrind />
      </TopoSection>
      <PhotoBand
        image="/images/coffee-bar.jpg"
        alt="The coffee bar under a hand-painted mountain sunset mural"
      />
    </div>
  );
}
