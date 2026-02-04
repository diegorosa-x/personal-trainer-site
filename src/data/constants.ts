
import { Plan, Testimonial } from '../types/types';

export const WHATSAPP_NUMBER = '5511999999999'; // Placeholder, user can update

export const IN_PERSON_PLANS: Plan[] = [
  {
    id: 'bronze',
    name: 'Plano Bronze',
    frequency: '2x na semana',
    totalClasses: '8 aulas no mês',
    price: 399.99,
  },
  {
    id: 'prata',
    name: 'Plano Prata',
    frequency: '3x na semana',
    totalClasses: '12 aulas no mês',
    price: 599.99,
  },
  {
    id: 'ouro',
    name: 'Plano Ouro',
    frequency: '4x na semana',
    totalClasses: '16 aulas no mês',
    price: 799.99,
    featured: true,
  },
  {
    id: 'plus',
    name: 'Plano Plus',
    frequency: '5x na semana',
    totalClasses: '20 aulas no mês',
    price: 999.99,
  }
];

export const ONLINE_FEATURES = [
  '2 meses de treino individualizado',
  'Treino 100% personalizado',
  'Flexibilidade para treinar em casa ou na academia',
  'Treinos em app com vídeos',
  'Feedbacks semanais',
  'Suporte VIP via WhatsApp'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Oliveira',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
    resultType: 'emagrecimento',
    text: 'Perdi 12kg em 3 meses com o acompanhamento do Higor. O foco na técnica e a dieta personalizada foram os diferenciais que eu nunca tive antes.'
  },
  {
    id: '2',
    name: 'Mariana Santos',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
    resultType: 'hipertrofia',
    text: 'Sempre tive dificuldade em ganhar massa. Com o treino de força do Higor, consegui resultados expressivos em 6 meses, mudando completamente meu shape.'
  },
  {
    id: '3',
    name: 'Ricardo Silva',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
    resultType: 'força',
    text: 'Minha performance no Powerlifting subiu de nível. Adicionei 40kg no meu agachamento seguindo a periodização correta.'
  }
];
