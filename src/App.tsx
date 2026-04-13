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
import { content } from './lib/content';
import type { 
  ServiceCardBlock, 
  WhyChooseItemBlock, 
  MarketItemBlock 
} from './types/cms';

// Extract typed slices once at module level — components receive plain data via props.
const { home: homeContent, about: aboutContent, contactInfo } = content;

// Type-guard filters: pull specific blocks out of the home Dynamic Zone.
const serviceBlocks = homeContent.blocks.filter(
  (b): b is ServiceCardBlock => b.__component === 'sections.service-card'
);

const whyChooseBlocks = homeContent.blocks.filter(
  (b): b is WhyChooseItemBlock => b.__component === 'sections.why-choose-item'
);

const marketBlocks = homeContent.blocks.filter(
  (b): b is MarketItemBlock => b.__component === 'sections.market-item'
);

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
      <Hero data={homeContent} />
      <TrustStrip />
      <Services blocks={serviceBlocks} />
      <About data={aboutContent} />
      <WhyChooseUs blocks={whyChooseBlocks} />
      <Markets blocks={marketBlocks} />
      <CTA contactInfo={contactInfo} />
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
          <Route path="/services" element={<div className="py-12"><Services blocks={serviceBlocks} /></div>} />
          <Route path="/about" element={<div className="py-12"><About data={aboutContent} /></div>} />
          <Route path="/why-us" element={<div className="py-12"><WhyChooseUs /></div>} />
          <Route path="/markets" element={<div className="py-12"><Markets /></div>} />
          <Route path="/contact" element={<div className="py-12"><CTA contactInfo={contactInfo} /></div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
