
export interface Plan {
  id: string;
  name: string;
  frequency: string;
  totalClasses: string;
  price: number;
  featured?: boolean;
  description?: string;
}

export interface OnlineConsultancyFeature {
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  resultType: 'emagrecimento' | 'hipertrofia' | 'força';
  text: string;
  videoUrl?: string;
}
