
import React from 'react';

export const Header: React.FC = () => {
  const phoneNumber = "+54 11 2519 6436";
  const telHref = "tel:+541125196436";

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Gramajo<span className="text-emerald-600 underline decoration-2 underline-offset-4">Lucas</span>
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Telefono</span>
            
            {/* Mobile: Link visible only on small screens */}
            <a 
              href={telHref}
              className="md:hidden text-sm font-black text-slate-800 tracking-tight hover:text-emerald-600 transition-colors active:scale-95 duration-200"
            >
              {phoneNumber}
            </a>

            {/* Desktop: Plain text visible only on medium/large screens */}
            <span 
              className="hidden md:block text-sm font-black text-slate-800 tracking-tight cursor-default"
            >
              {phoneNumber}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
