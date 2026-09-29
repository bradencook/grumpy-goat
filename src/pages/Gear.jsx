import PageHero from '../components/gear/PageHero';
import ServicesSection from '../components/gear/ServicesSection';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import RentalsSection from '../components/gear/RentalsSection';
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
        <ServicesSection />
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <RentalsSection />
      <TopoSection>
        <MountainDivider from="dark" to="light" />
        <GearSection />
      </TopoSection>
    </div>
  );
}
