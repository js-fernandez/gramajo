
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicios">
      <div className="text-center mb-16">
        <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Soluciones Operativas</span>
        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter italic">Especialidades</h2>
        <div className="w-12 h-1 bg-slate-900 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className={`group p-8 bg-white border border-slate-100 rounded-[2.5rem] transition-all duration-500 flex flex-col relative overflow-hidden hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/5 ${
              (service as any).special 
              ? 'sm:col-span-2 items-center text-center bg-white border-slate-200/50' 
              : 'items-start text-left'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 bg-slate-50 transition-all duration-500 group-hover:bg-emerald-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-emerald-500/20">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">
              {service.title}
            </h3>
            
            <p className={`text-slate-500 text-sm leading-relaxed font-medium ${ (service as any).special ? 'max-w-xl' : 'max-w-xs' }`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
