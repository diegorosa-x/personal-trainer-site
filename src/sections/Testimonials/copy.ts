import { Testimonial, TestimonialsCopy } from "./types";

export const STARS = [1, 2, 3, 4, 5] as const;


export const TESTIMONIALS_COPY: TestimonialsCopy = {
  sectionId: "resultados",
  titlePrefix: "Resultados de quem",
  titleHighlight: "Treina Sério",
  description:
    "Transformações reais de clientes que confiaram no método e alcançaram seus objetivos de força, estética e saúde.",
  proofPill: "A prova de que funciona",
  video: {
    title: "Relatos em Vídeo",
    subtitle: "Acompanhe a evolução de quem mudou de vida com nosso acompanhamento exclusivo.",
    watchTitle: "Assista o depoimento",
    watchSubtitle: "Prepare seu vídeo aqui",
  },
  cleanup: {
    title: "Higienize seus depoimentos!",
    textPrefix: "Higor, para tornar seu site ainda mais poderoso, nos envie seus ",
    textHighlight: "vídeos, nomes e fotos reais",
    textSuffix: " de clientes.",
    button: "Atualizar Dados",
  },
};


export const EXTRA_TESTIMONIALS = [
  {
    id: "4",
    name: "Fernanda Lima",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "emagrecimento",
    text: "Voltei a ter consistência. O plano é simples e eficiente, e o suporte me manteve no caminho. Resultado: -8kg e muito mais disposição.",
  },
  {
    id: "5",
    name: "Bruno Almeida",
    photo:
      "https://images.unsplash.com/photo-1520975958225-7f61d1f6f9c4?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "força",
    text: "Melhorei técnica e carga sem dores. A periodização fez total diferença. Evolução clara semana após semana.",
  },
  {
    id: "6",
    name: "Camila Rocha",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "hipertrofia",
    text: "Ganhei massa com estratégia e sem exageros. O acompanhamento é firme e ao mesmo tempo muito humano. Recomendo demais.",
  },
] as const;


export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Oliveira",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "emagrecimento",
    text: "Perdi 12kg em 3 meses com o acompanhamento do Higor. O foco na técnica e a dieta personalizada foram os diferenciais que eu nunca tive antes.",
  },
  {
    id: "2",
    name: "Mariana Santos",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "hipertrofia",
    text: "Sempre tive dificuldade em ganhar massa. Com o treino de força do Higor, consegui resultados expressivos em 6 meses, mudando completamente meu shape.",
  },
  {
    id: "3",
    name: "Ricardo Silva",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    resultType: "força",
    text: "Minha performance no Powerlifting subiu de nível. Adicionei 40kg no meu agachamento seguindo a periodização correta.",
  },
];
