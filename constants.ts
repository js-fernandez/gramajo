
export const WHATSAPP_NUMBER = "5491125196436";
export const DEFAULT_MESSAGE = "Hola Lucas, necesito solicitar un servicio de mensajería/logística. ¿Me podrías dar más información?";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export const getServiceLink = (serviceName: string) => {
  const message = `Hola Lucas, te contacto desde la web. Me interesa el servicio de: *${serviceName}*. ¿Tenés disponibilidad hoy?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/** 
 * POOL DE IMÁGENES PARA EL SHOWCASE
 */
const RAW_IMAGES = [
  "https://i.ibb.co/m5BLtQj1/3.jpg",
  "https://i.ibb.co/ymPRSMDS/asd.jpg",
  "https://i.ibb.co/6031nv5k/2.jpg",
  "https://i.ibb.co/LX2mq8GF/4.jpg",
  "https://images.unsplash.com/photo-1606185214007-493ce72b29d0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop"
];

export interface ImageItem {
  url: string;
  cat: "team" | "transit" | "logistics";
}

const generateImagePool = (): ImageItem[] => {
  const categories: ("team" | "transit" | "logistics")[] = ["team", "transit", "logistics"];
  
  return RAW_IMAGES.map((url, index) => ({
    url,
    cat: categories[index % categories.length]
  }));
};

export const IMAGE_POOL = generateImagePool();

export const SERVICES = [
  {
    title: "Mensajería y Paquetería",
    description: "Envíos puerta a puerta con seguimiento en tiempo real. Ideal para particulares y oficinas.",
    icon: "📦"
  },
  {
    title: "Envíos Flex",
    description: "Cumplí con tus clientes de e-commerce. Entregas garantizadas en menos de 24hs.",
    icon: "⚡"
  },
  {
    title: "Trámites AFIP / Aduana",
    description: "Gestión documental profesional y confidencial. Olvidate de las colas y los formularios.",
    icon: "⚖️"
  },
  {
    title: "Mini Flete",
    description: "Traslado de mercadería mediana y bultos pesados con el mayor cuidado y puntualidad.",
    icon: "🚚"
  },
  {
    title: "Resolver trámite complejo",
    description: "Gestión ante organismos públicos, bancos y logística de documentos confidenciales con absoluta reserva.",
    icon: "🏛️",
    special: true
  }
];

export const TRUST_INDICATORS = [
  { label: "AMBA & GBA", value: "Cobertura Total", icon: "📍" },
  { label: "Inmediato", value: "Tiempo de Respuesta", icon: "⏱️" },
  { label: "Garantizada", value: "Seguridad", icon: "🛡️" }
];
