import { InPersonPlan, PricingInPersonCopy } from "./types";

export const PRICING_IN_PERSON_COPY = {
  sectionId: "presencial",
  titlePrefix: "Acompanhamento",
  titleHighlight: "Presencial",
  description:
    "Escolha a forma de pagamento e a frequência semanal. Quanto maior o compromisso, melhor o valor por aula.",
  featuredBadge: "MAIS POPULAR",
  buttonLabel: "Escolher",
  quote: '"Consistência no treino gera resultado. Compromisso gera vantagem."',
  perks: ["Supervisão direta", "Ajustes técnicos", "Material exclusivo"],
  whatsappTextPrefix: "Olá Higor, quero saber mais sobre o",
} satisfies PricingInPersonCopy;

export const IN_PERSON_PLANS: readonly InPersonPlan[] = [
   {
    id: "monthly",
    name: "Plano Mensal",
    description: "Melhor custo-benefício pagando o mês fechado.",
    featured: true,
    billingType: "monthly",
    ratePerClass: 45,
    options: [
      // 2x sem desconto no mensal (como você disse)
      { label: "2x/sem (8 aulas)", classesPerMonth: 8, totalLabel: "sem desconto", disabled: true },

      { label: "3x/sem (12 aulas)", classesPerMonth: 12, totalLabel: "R$540/mês", totalValue: 540 },
      { label: "4x/sem (16 aulas)", classesPerMonth: 16, totalLabel: "R$720/mês", totalValue: 720 },
      { label: "5x/sem (20 aulas)", classesPerMonth: 20, totalLabel: "R$900/mês", totalValue: 900 },
    ],
  },
  {
    id: "weekly",
    name: "Plano Semanal",
    description: "Mais flexível, pagamento semanal.",
    billingType: "weekly",
    ratePerClass: 50,
    options: [
      { label: "2x/sem (8 aulas)", classesPerMonth: 8, totalLabel: "R$400/mês", totalValue: 400 },
      { label: "3x/sem (12 aulas)", classesPerMonth: 12, totalLabel: "R$600/mês", totalValue: 600 },
      { label: "4x/sem (16 aulas)", classesPerMonth: 16, totalLabel: "R$800/mês", totalValue: 800 },
      { label: "5x/sem (20 aulas)", classesPerMonth: 20, totalLabel: "R$1.000/mês", totalValue: 1000 },
    ],
  },
 
];
