
import React, { useState } from 'react';

const faqs = [
  {
    id: "faq-1",
    q: "¿Llegan a todo el Gran Buenos Aires?",
    a: "Sí, cubrimos Capital Federal y todas las zonas del GBA (Norte, Sur y Oeste) con la misma eficiencia."
  },
  {
    id: "faq-2",
    q: "¿Cuánto demora un envío local?",
    a: "Depende la urgencia, pero la mayoría de los servicios de mensajería estándar se resuelven en el mismo día. Consultanos por entregas express."
  },
  {
    id: "faq-3",
    q: "¿Cómo se abona el servicio?",
    a: "Aceptamos efectivo, transferencia bancaria y Mercado Pago. La coordinación es inmediata vía WhatsApp."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Preguntas Frecuentes</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-slate-100 bg-white rounded-xl overflow-hidden shadow-sm"
          >
            <button 
              className="w-full px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={faq.id}
              role="button"
            >
              <span className="font-semibold text-sm text-slate-700">{faq.q}</span>
              <svg 
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              id={faq.id}
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
              role="region"
            >
              <div className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
