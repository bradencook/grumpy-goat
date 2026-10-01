import PageHero from '../components/gear/PageHero';
import PricingSection from '../components/gear/PricingSection';
import TopoSection from '../components/common/TopoSection';
import PhotoBand from '../components/common/PhotoBand';
import { useText } from '../content/ContentContext';

export default function Gear() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('gear.hero.title')}
        image="/images/tool-wall.jpg"
        alt="The Grumpy Goat workshop tool wall"
      />
      <TopoSection>
        <PricingSection />
        <PhotoBand
          flush
          image="/images/shop-through-wheel-wide.jpg"
          alt="Parts and accessories on the shop floor, framed through a bike wheel"
        />
      </TopoSection>
    </div>
  );
}
