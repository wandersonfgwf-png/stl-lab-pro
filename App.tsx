
import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      {/* Top Bar Urgency */}
      <div className="bg-gray-900 text-white py-2.5 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] sticky top-0 z-[60]">
        🔥 Oferta por tempo limitado
      </div>

      <Hero />
      <Categories />
      <Features />
      <Comparison />
      <div className="bg-gray-50">
        <Bonuses />
      </div>
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
