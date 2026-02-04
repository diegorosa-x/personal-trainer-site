import { Copy, InPersonPlan, Testimonial } from "../types";

export const WHATSAPP_NUMBER = "5519982471193";

export const WHATSAPP_LINK = {
  whatsapp: (text: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
};

export const COPY: Copy = {
  site: {
    trainerName: "Higor Freire",
    trainerRole: "Personal Trainer & Coach",
    initials: "HF",
    crefLabel: "CREF 000000-G/SP", // ajuste aqui com o número real
  },

  nav: {
    items: [
      { href: "#sobre", label: "Sobre" },
      { href: "#resultados", label: "Resultados" },
      { href: "#presencial", label: "Presencial" },
      { href: "#consultoria", label: "Consultoria" },
      { href: "#pagamento", label: "Pagamento" },
      { href: "#contato", label: "Contato" },
    ],
    cta: "Começar",
    toggleAria: "Alternar tema",
  },

  hero: {
    badge: "Especialista em Performance",
    titlePrefix: "Transforme seu",
    titleHighlight: "corpo",
    titleSuffix: ", supere seus limites.",

    subtitle:
      "Especialista em treinos de força, hipertrofia e emagrecimento com acompanhamento individual focado em resultados reais.",

    ctaWhatsapp: "Falar no WhatsApp",
    ctaStart: "Começar Agora",
    startHref: "#presencial",

    background: {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      alt: "Gym background",
    },

    whatsappText: "Olá Higor, gostaria de saber mais sobre seu treinamento!",

    socialProof: {
      count: "+200",
      text: "vidas transformadas",
      avatarSeeds: [11, 12, 13, 14],
      avatarAlt: "Client",
    },
  },

  about: {
    sectionId: "sobre",

    titleLine1: "Higor Freire",
    titleLine2: "Personal Trainer",

    image: {
      src: "/assets/img/foto-perfil.jpeg",
      alt: "Higor Freire Personal Trainer",
    },

    cref: {
      label: "Registro Profissional",
      value: "CREF 000000-G/SP",
    },

    paragraphs: [
      "Minha missão é guiar você em uma jornada de resultados reais. Não é apenas sobre treinar, é sobre transformar seu estilo de vida e conquistar a melhor version do seu corpo.",
      "Com foco em Emagrecimento, Ganho de Massa e Qualidade de Vida, desenvolvo metodologias que unem ciência e prática para acelerar sua evolução de forma segura e sustentável.",
    ],

    highlights: {
      p1: "jornada de resultados reais",
      p2: "Emagrecimento, Ganho de Massa e Qualidade de Vida",
    },

    stats: [
      {
        value: "100%",
        label: "Personalizado",
      },
      {
        value: "Híbrido",
        label: "Presencial ou Online",
      },
    ],
  },

  pricingInPerson: {
    sectionId: "presencial",
    titlePrefix: "Acompanhamento",
    titleHighlight: "Presencial",
    description:
      "Para quem busca máxima performance e segurança, com supervisão direta em cada exercício, ajustes em tempo real e técnica perfeita para acelerar resultados.",
    featuredBadge: "Mais Popular",
    buttonLabel: "Escolher",
    quote:
      '"O acompanhamento definitivo para uma transformação completa de corpo e mente."',
    perks: ["Supervisão direta", "Ajustes técnicos", "Material exclusivo"],
    whatsappTextPrefix: "Olá Higor, gostaria de saber mais sobre o",
  },

  pricingOnline: {
    sectionId: "consultoria",

    titlePrefix: "Consultoria",
    titleHighlight: "Online",

    description:
      "Leve meu método para onde você estiver. Treine em casa ou na academia com planejamento completo e suporte contínuo através da minha plataforma exclusiva.",

    price: {
      value: "239,99",
      label: "Por Ciclo (2 Meses)",
    },

    cta: "Garantir minha vaga",
    whatsappText:
      "Olá Higor, gostaria de saber mais sobre a Consultoria Online!",

    image: {
      //src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      src: "/assets/img/personal-training.png",
      alt: "Mobile fitness training",
    },

    urgency: {
      title: "Vagas",
      subtitle: "Limitadas este mês",
    },
  },

  testimonials: {
    sectionId: "resultados",

    titlePrefix: "Resultados de quem",
    titleHighlight: "Treina Sério",
    description:
      "Transformações reais de clientes que confiaram no método e alcançaram seus objetivos de força, estética e saúde.",

    proofPill: "A prova de que funciona",

    video: {
      title: "Relatos em Vídeo",
      subtitle:
        "Acompanhe a evolução de quem mudou de vida com nosso acompanhamento exclusivo.",
      watchTitle: "Assista o depoimento",
      watchSubtitle: "Prepare seu vídeo aqui",
    },

    cleanup: {
      title: "Higienize seus depoimentos!",
      textPrefix:
        "Higor, para tornar seu site ainda mais poderoso, nos envie seus ",
      textHighlight: "vídeos, nomes e fotos reais",
      textSuffix: " de clientes.",
      button: "Atualizar Dados",
    },
  },

  paymentMethods: {
    sectionId: "pagamento",

    titlePrefix: "Formas de",
    titleHighlight: "Pagamento",
    subtitle: "Flexibilidade total para sua comodidade",

    methods: [
      {
        title: "PIX",
        description: "Transferência instantânea",
        icon: { type: "pix" },
      },
      {
        title: "Cartão",
        description: "Parcelamento disponível",
        icon: { type: "card" },
      },
      {
        title: "Dinheiro",
        description: "Pagamentos presenciais",
        icon: { type: "cash" },
      },
    ],
  },

  contact: {
    sectionId: "contato",

    titlePrefix: "Pronto para o próximo",
    titleHighlight: "nível?",

    subtitle:
      "Junte-se ao time através do link e comece sua evolução hoje mesmo.",

    whatsappBaseText: "Olá Higor, quero entrar para o time!",

    cards: [
      {
        key: "online",
        badge: "Metodologia Exclusiva",
        title: "Consultoria Online",
        cta: "WhatsApp",
        messageSuffix: " Escolhi a Consultoria Online.",
      },
      {
        key: "presencial",
        badge: "Acompanhamento VIP",
        title: "Treino Presencial",
        cta: "WhatsApp",
        messageSuffix: " Escolhi o Acompanhamento Presencial.",
      },
    ],
  },

  footer: {
    rights: (year: number) =>
      `© ${year} Higor Freire. Todos os direitos reservados.`,
  },
} as const;

export const IN_PERSON_PLANS: readonly InPersonPlan[] = [
  {
    id: "bronze",
    name: "Plano Bronze",
    frequency: "2x na semana",
    totalClasses: "8 aulas / mês",
    price: 399.99,
    description: "Ideal para manutenção e início gradual.",
  },
  {
    id: "prata",
    name: "Plano Prata",
    frequency: "3x na semana",
    totalClasses: "12 aulas / mês",
    price: 599.99,
    description: "Resultados consistentes e técnica aprimorada.",
    featured: true,
  },
  {
    id: "ouro",
    name: "Plano Ouro",
    frequency: "4x na semana",
    totalClasses: "16 aulas / mês",
    price: 799.99,
    description: "Transformação acelerada e alta performance.",
  },
  {
    id: "plus",
    name: "Plano Plus",
    frequency: "5x na semana",
    totalClasses: "20 aulas / mês",
    price: 999.99,
    description: "Transformação completa de corpo e mente.",
  },
];

export const ONLINE_FEATURES: readonly string[] = [
  "2 meses de treino individualizado",
  "Treino 100% personalizado",
  "Flexibilidade para treinar em casa ou na academia",
  "Treinos em app com vídeos",
  "Feedbacks semanais",
  "Suporte VIP via WhatsApp",
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
