
export const WHATSAPP_NUMBER = "5491125196436";
export const WHATSAPP_MESSAGE = "Hola Lucas, necesito solicitar un servicio de mensajería/logística. ¿Me podrías dar más información?";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SERVICES = [
  {
    title: "Mensajería y Paquetería",
    description: "Envíos rápidos puerta a puerta.",
    icon: "📦"
  },
  {
    title: "Envíos Flex",
    description: "Entregas en el día para e-commerce.",
    icon: "⚡"
  },
  {
    title: "Trámites AFIP / Aduana",
    description: "Gestión documental profesional.",
    icon: "⚖️"
  },
  {
    title: "Mini Flete",
    description: "Transporte de mercadería mediana.",
    icon: "🚚"
  }
];

export const TRUST_INDICATORS = [
  { label: "Cobertura Total", value: "AMBA & GBA" },
  { label: "Tiempo de Respuesta", value: "Inmediato" },
  { label: "Seguridad", value: "100% Garantizada" }
];
