
import React from 'react';
import { TRUST_INDICATORS } from '../constants';

export const Trust: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-4">
        {TRUST_INDICATORS.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center group bg-slate-50 border border-slate-200/60 p-8 rounded-[2rem] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-emerald-200 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Subtle top indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/30 group-hover:bg-emerald-500/20 transition-colors"></div>
            
            <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100">
              {item.icon}
            </div>
            
            {/* Value (e.g., Cobertura Total) */}
            <span className="text-xl font-black text-slate-900 leading-none tracking-tighter">
              {item.value}
            </span>
            
            {/* Label (e.g., AMBA & GBA) */}
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-4">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
