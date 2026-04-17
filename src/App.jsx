import React from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Archive from './components/Archive';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-mantequilla text-carbon font-jakarta selection:bg-salvia selection:text-mantequilla pt-0">
      <NoiseOverlay />
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <Manifesto />
        <Archive />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
