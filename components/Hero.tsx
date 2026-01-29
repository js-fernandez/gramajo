
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#020617] pt-36 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Gray Dotted Technical Pattern with Radial Fade */}
      <div className="absolute inset-0 z-0" 
           style={{ 
             backgroundImage: `radial-gradient(#475569 0.8px, transparent 0.8px)`,
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
             opacity: 0.2
           }}>
      </div>
      
      {/* Decorative Aurora Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none animate-float"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Logística Activa • AMBA 24/7</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-[900] text-white leading-[0.9] mb-10 tracking-tighter italic">
          Tus envíos llegan. <br/>
          <span className="text-emerald-500 not-italic">Tus trámites <span className="text-white/20">se resuelven.</span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
          Soluciones logísticas de alta confianza para quienes no tienen tiempo que perder. Gestión directa y personalizada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient group relative inline-flex items-center justify-center px-12 py-6 rounded-[2rem] text-white font-black text-lg shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-all active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-4 tracking-tight">
              Iniciar consulta directa
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Social Proof Bar */}
        <div className="pt-12 border-t border-white/5">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-8">Empresas y particulares que confían</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['LOGÍSTICA', 'E-COMMERCE', 'FINANZAS', 'LEGAL', 'RETAIL'].map(brand => (
              <span key={brand} className="text-base font-black text-white tracking-widest">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
