
import React from 'react';

const ROW_1 = [
  { url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=600", alt: "Entrega Express" },
  { url: "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=600", alt: "Mensajería Urbana" },
  { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600", alt: "Gestión de Stock" },
  { url: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=600", alt: "Paquetería E-commerce" },
];

const ROW_2 = [
  { url: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=600", alt: "Fletes y Cargas" },
  { url: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600", alt: "Logística Pesada" },
  { url: "https://images.unsplash.com/photo-1620455711419-848c71147f4f?auto=format&fit=crop&q=80&w=600", alt: "Documentación VIP" },
  { url: "https://images.unsplash.com/photo-1531053326607-9d349096d887?auto=format&fit=crop&q=80&w=600", alt: "Punto de Entrega" },
];

export const Gallery: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-left,
        .pause-on-hover:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="text-center mb-12">
        <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Evidencia Real</span>
        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter italic">Compromiso en movimiento</h2>
        <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto leading-relaxed px-4">
          Visualizá nuestra operativa diaria. Logística ágil y segura fluyendo por todo Buenos Aires.
        </p>
      </div>

      <div className="flex flex-col gap-6 pause-on-hover">
        {/* Row 1 - Moving Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-6 animate-marquee-left py-2">
            {[...ROW_1, ...ROW_1].map((img, i) => (
              <div 
                key={i} 
                className="relative w-64 h-44 sm:w-80 sm:h-56 flex-shrink-0 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm group"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest bg-emerald-600/80 px-4 py-2 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-6 animate-marquee-right py-2">
            {[...ROW_2, ...ROW_2].map((img, i) => (
              <div 
                key={i} 
                className="relative w-64 h-44 sm:w-80 sm:h-56 flex-shrink-0 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm group"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest bg-slate-900/80 px-4 py-2 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center px-4">
        <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Unidades operando ahora en AMBA
        </div>
      </div>
    </section>
  );
};
