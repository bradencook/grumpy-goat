import PageHero from '../components/gear/PageHero';
import MenuSection from '../components/grind/MenuSection';
import CoffeeHours from '../components/grind/CoffeeHours';
import PhotoBand from '../components/common/PhotoBand';
import TopoSection from '../components/common/TopoSection';
import Atmosphere from '../components/grind/Atmosphere';
import { useText } from '../content/ContentContext';

export default function Grind() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('grind.hero.title')}
        image="/images/coffee-bar-mural.jpg"
        alt="The Grumpy Goat coffee bar and mountain sunset mural"
        focus="center 55%"
      />
      <TopoSection>
        <MenuSection />
        <CoffeeHours />
      </TopoSection>
      <PhotoBand
        image="/images/lounge-couch.jpg"
        alt="The lounge: booths, a big couch, and the shop dog napping"
      />
      <Atmosphere />
      <PhotoBand
        image="/images/trail-dog-rider.jpg"
        alt="The shop dog leading a rider down the trail"
      />
    </div>
  );
}
