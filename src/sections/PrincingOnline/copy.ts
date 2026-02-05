import { PricingOnlineCopy } from "./types";

export const ONLINE_FEATURES = [
  "2 meses de treino individualizado",
  "Treino 100% personalizado",
  "Flexibilidade para treinar em casa ou na academia",
  "Treinos em app com vídeos",
  "Feedbacks semanais",
  "Suporte VIP via WhatsApp",
] as const;

export const PRICING_ONLINE_COPY = {
  sectionId: "consultoria",

  titlePrefix: "Consultoria",
  titleHighlight: "Online",

  description:
    "Leve meu método para onde você estiver. Treine em casa ou na academia com planejamento completo e suporte contínuo.",

  price: {
    value: "239,99",
    label: "Por Ciclo (2 Meses)",
  },

  cta: "Garantir minha vaga",
  whatsappText:
    "Olá Higor, gostaria de saber mais sobre a Consultoria Online!",

  image: {
    // src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?...",
    src: "/assets/img/personal-training.png",
    alt: "Mobile fitness training",
  },

  urgency: {
    title: "Vagas",
    subtitle: "Limitadas este mês",
  },
} as const satisfies PricingOnlineCopy;
