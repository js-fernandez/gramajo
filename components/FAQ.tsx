
import React, { useState } from 'react';

const faqs = [
  {
    id: "faq-1",
    q: "¿Llegan a todo el Gran Buenos Aires?",
    a: "Sí, cubrimos Capital Federal y todas las zonas del GBA (Norte, Sur y Oeste) con la misma eficiencia y puntualidad."
  },
  {
    id: "faq-2",
    q: "¿Cuánto demora un envío local?",
    a: "Depede la urgencia, pero la mayoría de los servicios de mensajería estándar se resuelven en el mismo día. Consultanos por entregas express de 2 a 4 horas."
  },
  {
    id: "faq-3",
    q: "¿Cómo se abona el servicio?",
    a: "Aceptamos efectivo, transferencia bancaria y Mercado Pago. La facturación y coordinación es inmediata vía WhatsApp para tu comodidad."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <div className="text-center mb-16">
        <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Despejá tus dudas</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter italic leading-[1]">Preguntas Frecuentes</h2>
        <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${
              openIndex === index ? 'border-emerald-200 bg-white shadow-lg' : 'border-slate-100 bg-white shadow-sm'
            }`}
          >
            <button 
              className="w-full px-8 py-6 flex justify-between items-center hover:bg-slate-50/50 transition-colors text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={faq.id}
              role="button"
            >
              <span className={`font-bold text-sm tracking-tight transition-colors ${openIndex === index ? 'text-emerald-700' : 'text-slate-700'}`}>
                {faq.q}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div 
              id={faq.id}
              className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              role="region"
            >
              <div className="px-8 pb-8 text-sm text-slate-500 leading-relaxed font-medium">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
