import PageHero from '../components/gear/PageHero';
import ContactInfo from '../components/contact/ContactInfo';
import MountainDivider from '../components/common/MountainDivider';
import TopoSection from '../components/common/TopoSection';
import SocialLinks from '../components/contact/SocialLinks';
import { useText } from '../content/ContentContext';

export default function Contact() {
  const t = useText();
  return (
    <div className="page">
      <PageHero
        title={t('contact.hero.title')}
        image="/images/storefront-vintage-bike.jpg"
        alt="Grumpy Goat storefront with a vintage bicycle out front"
        focus="center 45%"
      />
      <TopoSection>
        <ContactInfo />
        <MountainDivider from="light" to="dark" />
      </TopoSection>
      <SocialLinks />
    </div>
  );
}
