
import React, { useState } from 'react';

const faqs = [
  {
    id: "faq-1",
    q: "¿Llegan a todo el Gran Buenos Aires?",
    a: "Sí, cubrimos Capital Federal y todas las zonas del GBA (Norte, Sur y Oeste) con la misma eficiencia y puntualidad garantizada."
  },
  {
    id: "faq-2",
    q: "¿Cuánto demora un envío local?",
    a: "Depende de la urgencia seleccionada. Contamos con servicios de mensajería estándar en el día y entregas prioritarias (Express) de 2 a 4 horas para casos críticos."
  },
  {
    id: "faq-3",
    q: "¿Cómo se abona el servicio?",
    a: "Ofrecemos flexibilidad total: efectivo, transferencia bancaria y Mercado Pago. Emitimos factura y coordinamos todo por WhatsApp para que no pierdas tiempo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primera abierta por defecto mejora el UX

  return (
    <section className="py-8">
      <div className="text-center mb-20">
        <span className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.5em] block mb-5">Resolución inmediata</span>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tighter italic leading-[1]">Preguntas Frecuentes</h2>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full mt-8 opacity-40"></div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`border transition-all duration-500 rounded-[2.5rem] overflow-hidden ${
              openIndex === index ? 'border-emerald-100 bg-white shadow-xl shadow-emerald-500/5' : 'border-slate-100 bg-white shadow-sm'
            }`}
          >
            <button 
              className="w-full px-10 py-8 flex justify-between items-center hover:bg-slate-50/50 transition-colors text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={faq.id}
            >
              <span className={`font-black text-base md:text-lg tracking-tight transition-colors ${openIndex === index ? 'text-emerald-800' : 'text-slate-800'}`}>
                {faq.q}
              </span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openIndex === index ? 'bg-emerald-500 text-white rotate-180 shadow-lg shadow-emerald-500/30' : 'bg-slate-50 text-slate-400'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div 
              id={faq.id}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-10 pb-10 text-base text-slate-600 leading-relaxed font-semibold">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
