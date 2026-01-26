
import React from 'react';
import { TRUST_INDICATORS } from '../constants';

export const Trust: React.FC = () => {
  return (
    <section className="py-10 border-b border-slate-100">
      <div className="grid grid-cols-1 xs:grid-cols-3 gap-8">
        {TRUST_INDICATORS.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-[2rem] bg-white border border-slate-50 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-emerald-50 group-hover:scale-110 transition-all">
              {item.icon}
            </div>
            <span className="text-2xl font-black text-slate-900 leading-tight tracking-tight">
              {item.value}
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
