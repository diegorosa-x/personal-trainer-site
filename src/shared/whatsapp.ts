export const WHATSAPP_NUMBER = "5519982471193";

export const WHATSAPP_LINK = {
  whatsapp: (text: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
} as const;