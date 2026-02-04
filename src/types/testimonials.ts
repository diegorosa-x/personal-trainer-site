export type TestimonialResultType = "emagrecimento" | "hipertrofia" | "força";

export type Testimonial = {
  id: string;
  name: string;
  photo: string;
  resultType: TestimonialResultType;
  text: string;
  videoUrl?: string;
};

export type TestimonialsCopy = {
  sectionId: string;

  titlePrefix: string;
  titleHighlight: string;
  description: string;

  proofPill: string;

  video: {
    title: string;
    subtitle: string;
    watchTitle: string;
    watchSubtitle: string;
  };

  cleanup: {
    title: string;
    textPrefix: string;
    textHighlight: string;
    textSuffix: string;
    button: string;
  };
};
