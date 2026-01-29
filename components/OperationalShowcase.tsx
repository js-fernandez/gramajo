
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
    <section className="py-24 bg-[#fcfdfd] relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.4em]">Infraestructura en Movimiento</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter italic">
              El motor de tus <br/>
              <span className="text-slate-300 not-italic">compromisos diarios.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-slate-500 font-bold text-sm leading-relaxed border-l-2 border-slate-100 pl-6">
              Visualizá nuestra operativa real. Un sistema diseñado para la precisión donde cada movimiento cuenta.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[750px]">
          {/* Slot Principal: El factor humano */}
          <EditorialTile 
            items={categories.TEAM} 
            currentIndex={indices.team} 
            className="md:col-span-7 md:row-span-2"
            title="Capital Humano"
            subtitle="Expertos en resolución"
          />
          
          {/* Slot Superior: La velocidad */}
          <EditorialTile 
            items={categories.TRANSIT} 
            currentIndex={indices.transit} 
            className="md:col-span-5 md:row-span-1"
            title="Flota Activa"
            subtitle="Conexión total AMBA"
          />

          {/* Slot Inferior: El orden */}
          <EditorialTile 
            items={categories.LOGISTICS} 
            currentIndex={indices.logistics} 
            className="md:col-span-5 md:row-span-1"
            title="Estructura"
            subtitle="Orden bajo presión"
          />
        </div>

        {/* Floating Metrics Footer */}
        <div className="mt-12 flex flex-wrap gap-8 items-center justify-center md:justify-start px-2">
           <div className="flex items-center gap-3">
              <span className="text-slate-900 font-black text-2xl italic tracking-tighter">99.8%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Efectividad<br/>Operativa</span>
           </div>
           <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
           <div className="flex items-center gap-3">
              <span className="text-slate-900 font-black text-2xl italic tracking-tighter">+100</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Gestiones<br/>Diarias</span>
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
    <div className={`group relative rounded-[2.5rem] overflow-hidden bg-[#0a0f1c] border border-slate-200/10 shadow-2xl transition-all duration-700 flex flex-col ${className}`}>
      
      {/* Visual Canvas - Ajuste íntegro de imagen */}
      <div className="relative flex-grow flex items-center justify-center p-8 pb-32 overflow-hidden">
        {items.map((img, i) => {
          const isActive = i === (currentIndex % items.length);
          return (
            <div key={img.url} className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-[1500ms] ease-out ${
              isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              {/* Sutil resplandor interno para dar profundidad */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] opacity-50"></div>
              
              <img 
                src={img.url} 
                alt={title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-[10s] group-hover:scale-[1.03]"
              />
            </div>
          );
        })}
      </div>

      {/* Pie Editorial Integrado */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
           <div className="text-center">
              <h4 className="text-slate-900 text-lg md:text-xl font-black tracking-tighter leading-none italic mb-1 uppercase">
                {title}
              </h4>
              <p className="text-emerald-600 text-[9px] font-black uppercase tracking-[0.2em]">
                {subtitle}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
