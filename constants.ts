
export const WHATSAPP_NUMBER = "5491125196436";
export const DEFAULT_MESSAGE = "Hola Lucas, necesito solicitar un servicio de mensajería/logística. ¿Me podrías dar más información?";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export const getServiceLink = (serviceName: string) => {
  const message = `Hola Lucas, te contacto desde la web. Me interesa el servicio de: *${serviceName}*. ¿Tenés disponibilidad hoy?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

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
  }
];

export const TRUST_INDICATORS = [
  { label: "Cobertura Total", value: "AMBA & GBA", icon: "📍" },
  { label: "Tiempo de Respuesta", value: "Inmediato", icon: "⏱️" },
  { label: "Seguridad", value: "Garantizada", icon: "🛡️" }
];
