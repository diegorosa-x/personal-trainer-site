export type PaymentIconType = "pix" | "card" | "cash";

export type PaymentMethod = {
  readonly icon: {
    readonly type: PaymentIconType;
  };
  readonly title: string;
  readonly description: string;
};


export type PaymentMethodsCopy = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  methods: readonly PaymentMethod[];
};
