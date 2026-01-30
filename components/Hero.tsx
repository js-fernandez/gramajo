
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  // Estados para posiciones aleatorias (eje opuesto al movimiento)
  const [lineXPos, setLineXPos] = useState(25); // Carril para línea Horizontal
  const [lineYPos, setLineYPos] = useState(35); // Carril para línea Vertical
  const [dotPos, setDotPos] = useState({ x: 50, y: 20 });

  // Ciclo para LÍNEA HORIZONTAL (Regeneración cada 3s)
  useEffect(() => {
    const horizontalInterval = setInterval(() => {
      setLineXPos(Math.random() * 85 + 5);
    }, 3000); 
    return () => clearInterval(horizontalInterval);
  }, []);

  // Ciclo para LÍNEA VERTICAL (Regeneración cada 3s, con desfase inicial de 1.5s)
  useEffect(() => {
    let verticalInterval: number;
    const timeout = setTimeout(() => {
      setLineYPos(Math.random() * 85 + 5);
      verticalInterval = setInterval(() => {
        setLineYPos(Math.random() * 85 + 5);
      }, 3000);
    }, 1500);
    
    return () => {
      clearTimeout(timeout);
      if (verticalInterval) clearInterval(verticalInterval);
    };
  }, []);

  // Ciclo para PUNTOS (Frecuencia rápida - 1.6s)
  useEffect(() => {
    const dotInterval = setInterval(() => {
      let newX = Math.random() * 80 + 10;
      let newY = Math.random() * 80 + 10;

      // Exclusión del área del botón central
      if (newX > 30 && newX < 70 && newY > 55 && newY < 85) {
        newY = Math.random() * 30 + 15;
      }

      setDotPos({ x: newX, y: newY });
    }, 1600); 
    return () => clearInterval(dotInterval);
  }, []);

  return (
    <section className="relative bg-[#020617] pt-24 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* 1. Capas Atmosféricas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[140px] opacity-30"></div>
      </div>

      {/* 2. BLUEPRINT GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`, 
             backgroundSize: '75px 75px' 
           }}>
      </div>

      {/* 3. MOTOR NEURAL V13 (Aurora Pulse Engine) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* LÍNEA HORIZONTAL (1/3 de ancho) */}
        <div 
          key={`h-${lineXPos}`}
          className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0"
          style={{
            boxShadow: '0 0 15px rgba(16,185,129,0.3)',
            top: `${lineXPos}%`,
            left: '-33.3%',
            animation: `scan-short-x 3s linear forwards`,
          }}
        />

        {/* LÍNEA VERTICAL (1/3 de alto) */}
        <div 
          key={`v-${lineYPos}`}
          className="absolute w-px h-1/3 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent opacity-0"
          style={{
            boxShadow: '0 0 15px rgba(59,130,246,0.2)',
            left: `${lineYPos}%`,
            top: '-33.3%',
            animation: `scan-short-y 3s linear forwards`,
          }}
        />

        {/* NODO ESTOCÁSTICO CON AURORA (Aurora Pulse Micro-Node) */}
        <div 
          key={`dot-${dotPos.x}-${dotPos.y}`}
          className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0"
          style={{
            top: `${dotPos.y}%`,
            left: `${dotPos.x}%`,
            animation: `stochastic-aurora-pulse 1.6s ease-out forwards`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 px-2">
        <div className="inline-flex items-center gap-3 px-8 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 md:mb-14 backdrop-blur-xl shadow-2xl">
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Logística Certificada • AMBA</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-[950] text-white leading-[1.1] mb-10 md:mb-14 tracking-tighter italic">
          <span className="inline-block">Tus envíos llegan.</span> <br/>
          <span className="text-emerald-500 not-italic drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]">
            Tus trámites <span className="text-slate-400 not-italic hover:text-slate-300 transition-colors duration-500">se resuelven.</span>
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-400 mb-14 md:mb-20 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
          La infraestructura logística más confiable de Buenos Aires. <br className="hidden md:block"/>
          <span className="text-slate-200 font-bold">Gestión de alto nivel</span> para quienes no pueden esperar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 md:mb-32">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-gradient group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-full text-white font-black text-base md:text-lg shadow-[0_20px_60px_-10px_rgba(16,185,129,0.5)] hover:scale-[1.02] transition-all active:scale-95 w-full sm:w-auto overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[30deg] -translate-x-[250%] group-hover:animate-shine-fast"></div>
            <span className="relative z-10 flex items-center gap-3 tracking-tight">
              Agendar servicio ahora
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>

        <div className="pt-12">
          <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.6em] mb-8">Confianza corporativa de primer nivel</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30">
            {['LOGISTICS', 'E-COMMERCE', 'LEGAL HUB', 'RETAIL PRO'].map(brand => (
              <span key={brand} className="text-[10px] md:text-xs font-black text-white tracking-[0.4em] uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Escaneo Horizontal Sincronizado */
        @keyframes scan-short-x {
          0% { left: -33.3%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        /* Escaneo Vertical Sincronizado */
        @keyframes scan-short-y {
          0% { top: -33.3%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        /* Efecto Aurora Pulse (Inspirado en sensor de badge) */
        @keyframes stochastic-aurora-pulse {
          0% { 
            opacity: 0; 
            transform: scale(0.3) translate(-50%, -50%);
            box-shadow: 0 0 0px transparent;
          }
          15% { 
            opacity: 1; 
            transform: scale(1.1) translate(-50%, -50%);
            box-shadow: 0 0 15px rgba(16,185,129,0.8), 0 0 30px rgba(16,185,129,0.4);
          }
          40% {
            opacity: 0.8;
            transform: scale(1) translate(-50%, -50%);
            box-shadow: 0 0 10px rgba(16,185,129,0.6);
          }
          100% { 
            opacity: 0; 
            transform: scale(1.4) translate(-50%, -50%);
            box-shadow: 0 0 40px transparent;
          }
        }
        @keyframes shine-fast {
          0% { transform: translateX(-250%) skewX(-30deg); }
          100% { transform: translateX(250%) skewX(-30deg); }
        }
        .animate-shine-fast { animation: shine-fast 3s infinite ease-in-out; }
      `}</style>
    </section>
  );
};
