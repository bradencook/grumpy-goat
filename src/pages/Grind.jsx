import PageHero from '../components/gear/PageHero';
import MenuSection from '../components/grind/MenuSection';
import CoffeeHours from '../components/grind/CoffeeHours';
import PhotoBand from '../components/common/PhotoBand';
import TopoSection from '../components/common/TopoSection';
import { useText } from '../content/ContentContext';

export default function Grind() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('grind.hero.title')}
        image="/images/trail-dog-rider.jpg"
        alt="The shop dog leading a rider down the trail"
        focus="center 60%"
      />
      <TopoSection>
        <MenuSection />
        <CoffeeHours />
        <PhotoBand
          flush
          image="/images/lounge-couch.jpg"
          alt="The lounge: booths, a big couch, and the shop dog napping"
        >
          <h2>{t('grind.atmosphere.title')}</h2>
          {t('grind.atmosphere.body') && <p>{t('grind.atmosphere.body')}</p>}
        </PhotoBand>
      </TopoSection>
    </div>
  );
}
