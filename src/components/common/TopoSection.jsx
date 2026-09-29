import './TopoSection.css';

export default function TopoSection({ children }) {
  return (
    <div className="topo-section">
      <div className="topo-section__bg" />
      {children}
    </div>
  );
}
