
import React, { useState, useEffect, useMemo } from 'react';
import { IMAGE_POOL } from '../constants';

export const OperationalShowcase: React.FC = () => {
  const [indices, setIndices] = useState({ team: 0, transit: 0, logistics: 0 });

  const categories = useMemo(() => ({
    TEAM: IMAGE_POOL.filter(img => img.cat === 'team'),
    TRANSIT: IMAGE_POOL.filter(img => img.cat === 'transit'),
    LOGISTICS: IMAGE_POOL.filter(img => img.cat === 'logistics'),
  }), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev => ({
        team: (prev.team + 1) % (categories.TEAM.length || 1),
        transit: (prev.transit + 1) % (categories.TRANSIT.length || 1),
        logistics: (prev.logistics + 1) % (categories.LOGISTICS.length || 1),
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, [categories]);

  return (
    <section className="py-24 md:py-32 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.5em] block mb-5">Evidencia Operativa</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter italic">
              Infraestructura <br/>
              <span className="text-slate-300 not-italic">en tiempo real.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-slate-500 font-bold text-sm md:text-base leading-relaxed border-l-2 border-slate-100 pl-6">
              Visualización completa de nuestra capacidad instalada. Sin recortes, transparencia total.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
          <EditorialTile 
            items={categories.TEAM} 
            currentIndex={indices.team} 
            className="md:col-span-7 h-[500px] md:h-full"
            title="Capital Humano"
            subtitle="Nuestra fuerza principal"
          />
          
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            <EditorialTile 
              items={categories.TRANSIT} 
              currentIndex={indices.transit} 
              className="h-[400px] md:h-full"
              title="Flota Activa"
              subtitle="Cobertura AMBA"
            />
            <EditorialTile 
              items={categories.LOGISTICS} 
              currentIndex={indices.logistics} 
              className="h-[400px] md:h-full"
              title="Operativa"
              subtitle="Orden y Gestión"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface EditorialTileProps {
  items: { url: string }[];
  currentIndex: number;
  className?: string;
  title: string;
  subtitle: string;
}

const EditorialTile: React.FC<EditorialTileProps> = ({ items, currentIndex, className = "", title, subtitle }) => {
  if (items.length === 0) return null;
  
  return (
    <div className={`group relative rounded-[3rem] overflow-hidden bg-[#020617] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-1000 flex flex-col ${className}`}>
      <div className="absolute inset-0 z-0">
        {items.map((img, i) => {
          const isActive = i === (currentIndex % items.length);
          return (
            <div 
              key={img.url} 
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img 
                src={img.url} 
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110"
                alt="background blur"
              />
              <div className="absolute inset-0 p-8 md:p-12 pb-36 flex items-center justify-center">
                <img 
                  src={img.url} 
                  alt={title}
                  className={`max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform duration-[8000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:-translate-y-2 group-hover:border-white/20">
          <div>
            <h4 className="text-white text-xl md:text-2xl font-[900] tracking-tighter leading-none italic uppercase mb-1">
              {title}
            </h4>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
