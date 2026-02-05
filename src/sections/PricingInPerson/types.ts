export type InPersonPlan = {
  id: string;
  name: string;
  frequency: string;
  totalClasses: string;
  price: number;
  featured?: boolean;
  description?: string;
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