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