import { HeroCopy } from "./types";

export const HERO_COPY = {
  badge: "",
  titlePrefix: "Transforme seu",
  titleHighlight: "corpo",
  titleSuffix: ", supere seus limites.",
  subtitle:
    "Especialista em treinos de força, hipertrofia e emagrecimento com acompanhamento individual focado em resultados reais.",
  ctaWhatsapp: "Falar no WhatsApp",
  ctaStart: "Começar Agora",
  startHref: "#presencial",
  background: {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    alt: "Gym background",
  },
  whatsappText: "Olá Higor, gostaria de saber mais sobre seu treinamento!",
  socialProof: {
    count: "+200",
    text: "vidas transformadas",
    avatarSeeds: [11, 12, 13, 14],
    avatarAlt: "Client",
  },
} satisfies HeroCopy;
