
import React from 'react';
import { SERVICES, WHATSAPP_LINK, getServiceLink } from '../constants';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-8">
      <div className="text-center mb-12">
        <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Soluciones Logísticas</span>
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Servicios a tu medida</h2>
        <div className="w-16 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.15)] hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>
            
            <a 
              href={getServiceLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center px-5 py-3 bg-slate-50 text-emerald-700 rounded-xl text-[11px] font-black tracking-wider group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              CONSULTAR POR WHATSAPP
            </a>

            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
      
      {/* Banner de Servicio Especial Actualizado */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 p-8 sm:p-12 bg-slate-950 rounded-[2.5rem] text-white block overflow-hidden relative group hover:ring-[8px] ring-emerald-500/10 transition-all active:scale-[0.98] shadow-2xl"
      >
        {/* Background Grid Pattern (Replaces "LUC") */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <span className="inline-flex px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
              GESTIÓN PREMIUM
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tighter">¿Necesitás resolver un trámite complejo?</h3>
          </div>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Brindamos soluciones integrales para gestiones ante organismos públicos, entidades bancarias y logística de documentos confidenciales. <strong>Trato profesional, discreción y eficiencia absoluta.</strong>
          </p>
          
          <div className="inline-flex items-center bg-emerald-500 px-10 py-5 rounded-2xl font-black text-sm sm:text-base hover:bg-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1">
            <WhatsAppIcon className="w-6 h-6 mr-3" />
            Presupuestar trámite ahora
          </div>
        </div>

        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors"></div>
      </a>
    </section>
  );
};
