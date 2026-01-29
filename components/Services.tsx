
import React from 'react';
import { SERVICES, getServiceLink } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
        <div className="max-w-xl">
          <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">¿Qué podemos resolver hoy?</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic leading-[1.1] mb-2">
            Soluciones de <br/>
            <span className="text-slate-300 not-italic">Alto Impacto.</span>
          </h2>
        </div>
        <p className="text-slate-500 font-medium max-w-xs leading-relaxed text-sm">
          Logística diseñada para la eficiencia. Cada bulto o gestión es tratada con prioridad estratégica y confidencialidad.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {SERVICES.map((service, index) => {
          const isSpecial = (service as any).special;
          return (
            <div 
              key={index} 
              className={`group relative p-8 md:p-10 bg-white border border-slate-200/60 rounded-[2.5rem] transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${
                isSpecial ? 'md:col-span-4' : 'md:col-span-2'
              }`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                <span className="text-[100px] font-black leading-none">{index + 1}</span>
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-8 bg-slate-50 border border-slate-100 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-12 flex-grow">
                {service.description}
              </p>

              <a 
                href={getServiceLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-emerald-600 group-hover:gap-5 transition-all"
              >
                Solicitar hoy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
