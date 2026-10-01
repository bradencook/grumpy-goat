import StorySection from '../components/about/StorySection';
import TopoSection from '../components/common/TopoSection';
import ValuesSection from '../components/about/ValuesSection';

export default function About() {
  return (
    <div className="page">
      <TopoSection>
        <ValuesSection />
        <StorySection />
      </TopoSection>
    </div>
  );
}
