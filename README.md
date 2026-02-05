# 🏋️‍♂️ Higor Freire – Personal Trainer Website

Site profissional, moderno e focado em conversão para **Higor Freire**, Personal Trainer especializado em **treinos de força, hipertrofia e emagrecimento**.

O projeto foi desenvolvido com **React + Vite + TypeScript + Tailwind CSS**, seguindo uma estética **fitness premium**, dark mode por padrão e animações sutis para melhorar a experiência do usuário.

---

## 🔥 Preview

👉 **Demo:** [personal-trainer-site](https://personal-trainer-site-flax.vercel.app/)

Landing page moderna com foco em performance, conversão e experiência mobile-first.

- Exibição clara dos planos de treino
- Destaque para consultoria online
- CTA direto para contato via WhatsApp
- Design clean e moderno
- Arquitetura organizada para crescimento futuro

---

## ✨ Features

- ✅ Design premium fitness (dark mode por padrão)
- ✅ Totalmente responsivo (mobile first)
- ✅ Arquitetura modular e escalável
- ✅ Separação clara entre UI, dados e tipagem
- ✅ Componentização por domínio (sections / features)
- ✅ Animações sutis (scroll reveal e hover)
- ✅ Dark / Light mode com persistência
- ✅ Conteúdo centralizado em constants.ts
- ✅ Integração direta com WhatsApp

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Função |
|------------------|--------|
| **React + Vite** | Framework e bundler para aplicações web modernas e rápidas |
| **TypeScript**   | Tipagem estática, segurança e melhores práticas |
| **Tailwind CSS** | Utility-first CSS para estilização rápida e consistente |
| **Framer Motion**| Animações sutis e performáticas |
| **Lucide React** | Ícones SVG modernos e leves |
| **Git**          | Controle de versão |
| **Vercel**       | Plataforma recomendada para deploy |

---

## 🧱 Estrutura do Projeto

```text
src/
├─ app/
│  ├─ App.tsx
│  └─ main.tsx
│
├─ shared/
│  ├─ whatsapp.ts        # utilidades globais (cross-section)
│  └─ constants.ts       # só coisas realmente globais (ex: números, env)
│
├─ copy/
│  ├─ site.copy.ts
│  ├─ nav.copy.ts
│  ├─ footer.copy.ts
│  └─ index.ts           # agrega o Copy final
│
├─ types/
│  ├─ copy.ts            # tipo Copy (contrato global)
│  └─ index.ts
│
├─ features/
│  └─ header/
│     ├─ components/
│     ├─ hooks/
│     └─ index.ts
│
├─ sections/
│  ├─ Hero/
│  │  ├─ Hero.tsx
│  │  ├─ HeroBackground.tsx
│  │  ├─ HeroBadgeTicker.tsx
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  ├─ About/
│  │  ├─ About.tsx
│  │  ├─ AboutMedia.tsx
│  │  ├─ AboutContent.tsx
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  ├─ PricingInPerson/
│  │  ├─ PricingInPerson.tsx
│  │  ├─ PlanCard.tsx
│  │  ├─ data.ts
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  ├─ PricingOnline/
│  │  ├─ PricingOnline.tsx
│  │  ├─ FeatureList.tsx
│  │  ├─ UrgencyCard.tsx
│  │  ├─ data.ts
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  ├─ Testimonials/
│  │  ├─ Testimonials.tsx
│  │  ├─ Carousel.tsx
│  │  ├─ Controls.tsx
│  │  ├─ Dots.tsx
│  │  ├─ data.ts
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  ├─ PaymentMethods/
│  │  ├─ PaymentMethods.tsx
│  │  ├─ copy.ts
│  │  ├─ types.ts
│  │  └─ index.ts
│  │
│  └─ Contact/
│     ├─ ContactSection.tsx
│     ├─ copy.ts
│     ├─ types.ts
│     └─ index.ts
│
└─ components/
   └─ Footer/
      ├─ Footer.tsx
      ├─ copy.ts
      ├─ types.ts
      └─ index.ts

```

## 🚀 Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev
---

## A aplicação estará disponível em:
👉 http://localhost:5173
```

---

```md
## 🧠 Decisões Técnicas

- Dark mode como padrão para reforçar estética premium fitness
- Conteúdo centralizado em `constants.ts` para facilitar manutenção e i18n
- Componentização por domínio para evitar overengineering
- Acessibilidade básica aplicada (aria-labels, landmarks, lazy loading)
```