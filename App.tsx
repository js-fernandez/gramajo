
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased bg-slate-50">
      {/* 
          Actualización UX: 
          - Header oscuro para mayor autoridad y contraste.
          - CTA flotante permanente para reducir la fricción de búsqueda.
      */}
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
          <Trust />
          <Services />
          <FAQ />
        </div>
      </main>

      <Footer />
      
      {/* Visible en todo momento según solicitud */}
      <FloatingCTA />
    </div>
  );
};

export default App;
