import PageHero from '../components/gear/PageHero';
import MenuSection from '../components/grinds/MenuSection';
import CoffeeHours from '../components/grinds/CoffeeHours';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import Atmosphere from '../components/grinds/Atmosphere';
import { useText } from '../content/ContentContext';

export default function Grinds() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('grinds.hero.title')}
        image="/images/coffee-bar-mural.jpg"
        alt="The Grumpy Goat coffee bar and mountain sunset mural"
        focus="center 55%"
      />
      <TopoSection>
        <MenuSection />
        <CoffeeHours />
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <Atmosphere />
    </div>
  );
}
