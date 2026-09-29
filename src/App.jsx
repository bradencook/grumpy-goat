import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Gear from './pages/Gear';
import Grinds from './pages/Grinds';
import About from './pages/About';
import Contact from './pages/Contact';
import FontPreview from './pages/FontPreview';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/grinds" element={<Grinds />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fonts" element={<FontPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
