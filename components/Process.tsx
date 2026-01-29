
import React from 'react';

const STEPS = [
  {
    num: "01",
    title: "Contacto Directo",
    desc: "Envianos un WhatsApp con tu necesidad. Respondemos en minutos con atención humana."
  },
  {
    num: "02",
    title: "Cotización al Instante",
    desc: "Te pasamos el presupuesto exacto y coordinamos el retiro sin burocracia."
  },
  {
    num: "03",
    title: "Gestión y Entrega",
    desc: "Ejecutamos el servicio con reporte de estado en tiempo real hasta la entrega final."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f1c] text-white rounded-[3rem] mx-4 md:mx-8 my-16 overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: `radial-gradient(#ffffff 0.8px, transparent 0.8px)`, 
             backgroundSize: '24px 24px' 
           }}>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Eficiencia Garantizada</span>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter leading-none">Logística en 3 pasos</h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-8 rounded-full opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="group flex flex-col items-center text-center relative">
              {/* Connector line for desktop */}
              {i < 2 && (
                <div className="hidden md:block absolute top-12 left-2/3 w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent z-0"></div>
              )}
              
              <div className="text-7xl font-black text-white/5 mb-[-2.5rem] group-hover:text-emerald-500/20 transition-colors duration-700 italic relative z-0">
                {step.num}
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform"></div>
                <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
