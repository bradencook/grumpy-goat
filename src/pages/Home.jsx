import Hero from '../components/home/Hero';
import TopoSection from '../components/common/TopoSection';
import PhotoBand from '../components/common/PhotoBand';
import FeaturedGear from '../components/home/FeaturedGear';
import FeaturedGrind from '../components/home/FeaturedGrind';
import { useText } from '../content/ContentContext';

export default function Home() {
  const t = useText();
  return (
    <div className="page">
      <Hero />
      <TopoSection>
        <PhotoBand
          image="/images/storefront-mountains.jpg"
          alt="Grumpy Goat storefront on Main Street with the Wasatch mountains behind it"
          focus="center 60%"
        >
          <h2>{t('home.intro.title')}</h2>
          {t('home.intro.p1') && <p>{t('home.intro.p1')}</p>}
          {t('home.intro.p2') && <p>{t('home.intro.p2')}</p>}
        </PhotoBand>
      </TopoSection>
      <FeaturedGear />
      <TopoSection>
        <FeaturedGrind />
        <PhotoBand
          image="/images/coffee-bar.jpg"
          alt="The coffee bar under a hand-painted mountain sunset mural"
        />
      </TopoSection>
    </div>
  );
}
