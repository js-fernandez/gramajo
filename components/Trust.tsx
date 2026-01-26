
import React from 'react';
import { TRUST_INDICATORS } from '../constants';

export const Trust: React.FC = () => {
  return (
    <section className="py-4 border-b border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_INDICATORS.map((item, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-black text-slate-900 leading-none">
              {item.value}
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
