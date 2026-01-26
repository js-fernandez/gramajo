
import React from 'react';

const ZONAS = ["CABA", "Zona Norte", "Zona Sur", "Zona Oeste", "La Plata", "Pilar", "Escobar", "Tigre", "Quilmes", "Avellaneda", "San Isidro"];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-2 tracking-tighter">
              Gramajo<span className="text-emerald-600">Lucas</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Soluciones logísticas de última milla y gestiones administrativas con presencia en toda el área metropolitana.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Zonas de Cobertura</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {ZONAS.map((zona) => (
                <span key={zona} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full border border-slate-100">
                  {zona}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 text-center">
          <div className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Gramajo Lucas Logística • Buenos Aires, Argentina
          </div>
        </div>
      </div>
    </footer>
  );
};
