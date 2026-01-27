
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black tracking-tighter mb-1">
              Gramajo<span className="text-emerald-600">Lucas</span>
            </div>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]">Logística & Mensajería Profesional</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Operativa: Lun a Vie • 08 a 20 hs
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <div className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} GL Logística • Buenos Aires, Argentina
          </div>
        </div>
      </div>
    </footer>
  );
};
