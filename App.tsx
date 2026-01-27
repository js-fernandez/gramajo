
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
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust section with full-width white background */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <Trust />
          </div>
        </div>
        
        {/* Services on slate-50 background */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Services />
        </div>

        {/* FAQ section on white background */}
        <div className="bg-white py-16 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
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
