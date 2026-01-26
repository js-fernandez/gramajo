
import React, { useState } from 'react';

const faqs = [
  {
    q: "¿Llegan a todo el Gran Buenos Aires?",
    a: "Sí, cubrimos Capital Federal y todas las zonas del GBA (Norte, Sur y Oeste)."
  },
  {
    q: "¿Cuánto demora un envío local?",
    a: "Depende la urgencia, pero la mayoría de los servicios de mensajería se resuelven en el mismo día."
  },
  {
    q: "¿Cómo se abona el servicio?",
    a: "Aceptamos efectivo, transferencia y Mercado Pago. Lo coordinamos por WhatsApp."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Preguntas rápidas</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-slate-100 bg-white rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
              <span className="font-semibold text-sm text-slate-700">{faq.q}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm text-slate-500 animate-fadeIn">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
