export type Props = {
  plan: InPersonPlan;
  idx: number;
  reduceMotion: boolean;

  perks: readonly string[];
  href: string;

  buttonLabel: string;
  featuredBadge: string;
};

export type BillingType = "weekly" | "monthly";

export type BillingOption = {
  label: string;        // "2x/sem (8 aulas)"
  classesPerMonth: number; // 8, 12, 16, 20
  totalLabel: string;   // "R$400/mês" ou "sem desconto"
  totalValue?: number;  // opcional (se quiser usar depois)
  disabled?: boolean;   // opcional (para "sem desconto")
};

export type InPersonPlan = {
  id: string;
  name: string;
  description?: string;
  featured?: boolean;

  billingType: BillingType;
  ratePerClass: number; // 50 ou 45

  options: readonly BillingOption[];
};

export type PricingInPersonCopy = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  whatsappTextPrefix: string;
  featuredBadge: string;
  buttonLabel: string;
  quote: string;
  perks: readonly string[];
};
