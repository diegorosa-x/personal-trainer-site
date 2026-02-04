import type { PricingInPersonCopy, PricingOnlineCopy } from "./pricing";
import type { PaymentMethodsCopy } from "./payments";
import { TestimonialsCopy } from "./testimonials";

export type HeroCopy = {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  whatsappText: string;
  ctaWhatsapp: string;
  ctaStart: string;
  startHref: string;
  background: {
    src: string;
    alt: string;
  };
  socialProof: {
    avatarSeeds: readonly (string | number)[];
    avatarAlt: string;
    count: string;
    text: string;
  };
};

export type AboutCopy = {
  sectionId: string;
  titleLine1: string;
  titleLine2: string;
  image: { src: string; alt: string };
  cref: { label: string; value: string };
  paragraphs: readonly string[];
  highlights: { p1: string; p2: string };
  stats: readonly { label: string; value: string }[];
};

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

export type FooterCopy = {
  rights: (year: number) => string;
};

export type SiteCopy = {
  trainerName: string;
  trainerRole: string;
  initials: string;
  crefLabel: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type NavCopy = {
  items: readonly NavItem[];
  cta: string;
  toggleAria: string;
};

export type Copy = {
  site: SiteCopy;
  nav: NavCopy;
  footer: FooterCopy;
  hero: HeroCopy;
  about: AboutCopy;
  pricingInPerson: PricingInPersonCopy;
  pricingOnline: PricingOnlineCopy;
  testimonials: TestimonialsCopy; // se você tiver esse tipo, senão pode tipar depois

  paymentMethods: PaymentMethodsCopy;
  contact: ContactCopy;
};
