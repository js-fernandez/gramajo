
import React from 'react';
import { TRUST_INDICATORS } from '../constants';

export const Trust: React.FC = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_INDICATORS.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black text-slate-900 leading-none tracking-tighter mb-1">
                {item.value}
              </span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.3em]">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
