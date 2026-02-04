export type PaymentIconType = "pix" | "card" | "cash";

export type PaymentMethod = {
  icon: {
    type: PaymentIconType;
  };
  title: string;
  description: string;
};

export type PaymentMethodsCopy = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  methods: readonly PaymentMethod[];
};
