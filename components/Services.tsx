
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Soluciones directas</h2>
        <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="group p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">¿Trámite especial?</h3>
          <p className="text-slate-300 text-sm">Consultanos por trámites bancarios, registros o gestiones personalizadas. Lo resolvemos.</p>
        </div>
        <div className="absolute -right-4 -bottom-4 text-slate-800 text-7xl font-black select-none opacity-20">
          LOG
        </div>
      </div>
    </section>
  );
};
