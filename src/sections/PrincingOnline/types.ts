export type PricingOnlineCopy = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  whatsappText: string;
  cta: string;
  price: {
    value: string; 
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
  urgency: {
    title: string;
    subtitle: string;
  };
};
