
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = "+54 11 2519 6436";
  const telHref = "tel:+541125196436";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Gramajo<span className="text-emerald-500 italic">Lucas</span>
          </a>
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest">
            {[
              { label: 'Servicios', href: '#servicios' },
              { label: 'Trayectoria', href: '#trayectoria' },
              { label: 'FAQ', href: '#faq' }
            ].map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-slate-400'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="h-8 w-px bg-slate-200 hidden md:block opacity-20"></div>

          <a 
            href={telHref}
            className={`flex flex-col items-end group transition-all ${isScrolled ? 'opacity-100' : 'opacity-80'}`}
          >
            <span className={`text-[8px] font-black uppercase tracking-[0.3em] leading-none mb-1 transition-colors ${isScrolled ? 'text-slate-400' : 'text-emerald-500'}`}>Urgencias</span>
            <span className={`text-sm md:text-base font-black tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'} group-hover:text-emerald-500`}>
              {phoneNumber}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
