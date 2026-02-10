
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Trust } from './components/Trust';
import { OperationalShowcase } from './components/OperationalShowcase';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#fcfdfd]">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="bg-white py-12 -mt-12 relative z-20 border-b border-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Trust />
          </div>
        </div>

        <div id="servicios" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-6">
            <Services />
          </div>
        </div>
        
        <Process />

        <div id="trayectoria" className="py-16 md:py-24 bg-[#f8fafc]">
          <OperationalShowcase />
        </div>

        <div id="faq" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FAQ />
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
