
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Trust } from './components/Trust';
import { OperationalShowcase } from './components/OperationalShowcase';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#fcfdfd]">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust bar immediately after Hero to validate legitimacy */}
        <div className="bg-white py-8 -mt-10 relative z-20">
          <div className="max-w-6xl mx-auto px-6">
            <Trust />
          </div>
        </div>

        {/* Services first to capture intent and solve the user's problem */}
        <div id="servicios" className="py-24 bg-[#f8fafc] border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <Services />
          </div>
        </div>
        
        {/* Process explains "How" to lower the barrier of contact */}
        <Process />

        {/* Showcase provides visual proof and builds desire via Bento Grid */}
        <div id="trayectoria">
          <OperationalShowcase />
        </div>

        {/* FAQ handles final objections before the bottom of the page */}
        <div id="faq" className="py-32 bg-white">
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
