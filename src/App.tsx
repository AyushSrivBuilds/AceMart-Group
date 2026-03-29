import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Markets from './components/Markets';
import CTA from './components/CTA';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <WhyChooseUs />
      <Markets />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<div className="py-12"><Services /></div>} />
          <Route path="/about" element={<div className="py-12"><About /></div>} />
          <Route path="/why-us" element={<div className="py-12"><WhyChooseUs /></div>} />
          <Route path="/markets" element={<div className="py-12"><Markets /></div>} />
          <Route path="/contact" element={<div className="py-12"><CTA /></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
