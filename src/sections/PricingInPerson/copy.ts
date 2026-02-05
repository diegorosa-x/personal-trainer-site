import { InPersonPlan, PricingInPersonCopy } from "./types";


export const PRICING_IN_PERSON_COPY = {
  sectionId: "presencial",
  titlePrefix: "Acompanhamento",
  titleHighlight: "Presencial",
  description:
    "Para quem busca máxima performance e segurança, com supervisão direta em cada exercício, ajustes em tempo real e técnica perfeita para acelerar resultados.",
  featuredBadge: "Mais Popular",
  buttonLabel: "Escolher",
  quote:
    '"O acompanhamento definitivo para uma transformação completa de corpo e mente."',
  perks: ["Supervisão direta", "Ajustes técnicos", "Material exclusivo"],
  whatsappTextPrefix: "Olá Higor, gostaria de saber mais sobre o",
} satisfies PricingInPersonCopy;

export const IN_PERSON_PLANS: readonly InPersonPlan[] = [
  {
    id: "bronze",
    name: "Plano Bronze",
    frequency: "2x na semana",
    totalClasses: "8 aulas / mês",
    price: 399.99,
    description: "Ideal para manutenção e início gradual.",
  },
  {
    id: "prata",
    name: "Plano Prata",
    frequency: "3x na semana",
    totalClasses: "12 aulas / mês",
    price: 599.99,
    description: "Resultados consistentes e técnica aprimorada.",
    featured: true,
  },
  {
    id: "ouro",
    name: "Plano Ouro",
    frequency: "4x na semana",
    totalClasses: "16 aulas / mês",
    price: 799.99,
    description: "Transformação acelerada e alta performance.",
  },
  {
    id: "plus",
    name: "Plano Plus",
    frequency: "5x na semana",
    totalClasses: "20 aulas / mês",
    price: 999.99,
    description: "Transformação completa de corpo e mente.",
  },
];
