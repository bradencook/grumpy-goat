import PageHero from '../components/gear/PageHero';
import MenuSection from '../components/grind/MenuSection';
import CoffeeHours from '../components/grind/CoffeeHours';
import MountainDivider from '../components/common/MountainDivider';
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
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <Atmosphere />
    </div>
  );
}
