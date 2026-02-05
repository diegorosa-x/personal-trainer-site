import { PaymentMethodsCopy } from "./types";

export const PAYMENT_METHODS_COPY: PaymentMethodsCopy = {
  sectionId: "pagamento",
  titlePrefix: "Formas de",
  titleHighlight: "Pagamento",
  subtitle: "Flexibilidade total para sua comodidade",
  methods: [
    { title: "PIX", description: "Transferência instantânea", icon: { type: "pix" } },
    { title: "Cartão", description: "Parcelamento disponível", icon: { type: "card" } },
    { title: "Dinheiro", description: "Pagamentos presenciais", icon: { type: "cash" } },
  ],
};
