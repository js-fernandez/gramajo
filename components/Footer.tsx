
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xl font-bold mb-4">Gramajo Lucas</div>
        <p className="text-slate-400 text-xs mb-8 uppercase tracking-widest font-semibold">
          Mensajería • Logística • Distribución
        </p>
        <div className="text-slate-500 text-sm mb-4">
          Operando en toda el Área Metropolitana de Buenos Aires
        </div>
        <div className="text-slate-300 text-[10px] font-medium">
          &copy; {new Date().getFullYear()} Gramajo Lucas Logística. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
