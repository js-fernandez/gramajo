
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
        
        {/* Trust bar: Fondo blanco para contraste inmediato */}
        <div className="bg-white py-12 -mt-12 relative z-20 border-b border-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <Trust />
          </div>
        </div>

        {/* Bloque Operativo Unificado: Mismo fondo en Services y Showcase */}
        <div id="servicios" className="py-24 md:py-32 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-6">
            <Services />
          </div>
        </div>
        
        <Process />

        <div id="trayectoria">
          <OperationalShowcase />
        </div>

        <div id="faq" className="py-20 md:py-32 bg-white">
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
