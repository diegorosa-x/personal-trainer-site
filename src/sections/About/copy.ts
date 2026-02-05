import { AboutCopy } from "./types";

export const ABOUT_COPY = {
  sectionId: "sobre",
  titleLine1: "Higor Freire",
  titleLine2: "Personal Trainer",
  image: {
    src: "/assets/img/foto-perfil.jpeg",
    alt: "Higor Freire Personal Trainer",
  },
  cref: { label: "Registro Profissional", value: "CREF 000000-G/SP" },
  paragraphs: [
    "Minha missão é guiar você em uma jornada de resultados reais. Não é apenas sobre treinar, é sobre transformar seu estilo de vida e conquistar a melhor versão do seu corpo.",
    "Com foco em emagrecimento, ganho de massa e qualidade de vida, desenvolvo metodologias que unem ciência e prática para acelerar sua evolução de forma segura e sustentável.",
  ],
  highlights: {
    p1: "jornada de resultados reais",
    p2: "emagrecimento, ganho de massa e qualidade de vida",
  },
  stats: [
    { value: "100%", label: "Personalizado" },
    { value: "Híbrido", label: "Presencial ou Online" },
  ],
} satisfies AboutCopy;
