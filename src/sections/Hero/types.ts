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
