import PageHero from '../components/gear/PageHero';
import ServicesSection from '../components/gear/ServicesSection';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import PhotoBand from '../components/common/PhotoBand';
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
      <PhotoBand
        image="/images/shop-aisle.jpg"
        alt="Aisle of apparel, gloves, and accessories inside the shop"
      />
      <TopoSection>
        <GearSection />
      </TopoSection>
    </div>
  );
}
