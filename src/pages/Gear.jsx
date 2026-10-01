import PageHero from '../components/gear/PageHero';
import PricingSection from '../components/gear/PricingSection';
import TopoSection from '../components/common/TopoSection';
import GearSection from '../components/gear/GearSection';
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
        <GearSection />
      </TopoSection>
    </div>
  );
}
