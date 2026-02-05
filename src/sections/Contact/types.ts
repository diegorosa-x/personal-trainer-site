export type ContactCard = {
  key: "online" | "presencial";
  badge: string;
  title: string; // texto do botão pode vir daqui
  cta: string; // ex.: "WhatsApp"
  messageSuffix: string;
};

export type ContactCopy = {
  sectionId: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  whatsappBaseText: string;
  cards: readonly ContactCard[];
};