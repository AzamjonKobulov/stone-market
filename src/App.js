import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/landing-page/LandingPage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import ForFabricatorsPage from './pages/for-fabricators/ForFabricatorsPage';
import ContactPage from './pages/contact-page/ContactPage';
import StoneIQPage from './pages/stone-iq-page/StoneIQPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (bool) => {
    setIsOpen(bool);

    const body = document.getElementById('body');
    body.classList.toggle('fixed__body');
  };

  return (
    <div className="font-lato overflow-hidden">
      <Router>
        {isOpen && <MobileMenu onOpen={handleOpen} />}
        <Navbar onOpen={handleOpen} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/forfabricatorspage" element={<ForFabricatorsPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/stoneiqpage" element={<StoneIQPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
