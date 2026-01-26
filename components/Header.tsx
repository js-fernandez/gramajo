
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Gramajo<span className="text-emerald-600 underline decoration-2 underline-offset-4">Lucas</span>
          </span>
        </div>
        <div className="hidden sm:block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          Logística Profesional
        </div>
      </div>
    </header>
  );
};
