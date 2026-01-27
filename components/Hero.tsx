
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 pt-20 pb-16 px-6 overflow-hidden">
      {/* Refined Texture Layer: Ultra-subtle Dotted Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 85%)'
        }}
      ></div>

      {/* High-end Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Headline - More Authoritative */}
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
          Tus envíos llegan. <br/>
          <span className="text-emerald-500">Tus trámites se resuelven.</span>
        </h1>
        
        {/* Subcopy - Professional and direct */}
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Gestión logística personalizada para quienes buscan puntualidad y confianza absoluta. 
          Mensajería experta cubriendo todo AMBA y GBA con respuesta inmediata.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient group relative inline-flex items-center justify-center px-12 py-5 rounded-2xl text-white font-black text-lg shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:scale-[1.03] transition-all active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Consultar disponibilidad ahora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Trust Hint */}
        <div className="mt-12 flex items-center justify-center gap-4 text-slate-500">
          <div className="h-px w-8 bg-slate-800"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">Compromiso Gramajo Lucas</span>
          <div className="h-px w-8 bg-slate-800"></div>
        </div>
      </div>
    </section>
  );
};
