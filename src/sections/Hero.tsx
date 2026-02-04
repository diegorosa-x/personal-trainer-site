import React from 'react';
import { COPY, WHATSAPP_LINK } from '../data/constants.ts';

const Hero: React.FC = () => {
  const { hero } = COPY;

  const whatsappUrl = WHATSAPP_LINK.whatsapp(hero.whatsappText);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={hero.background.src}
          alt={hero.background.alt}
          className="w-full h-full object-cover opacity-30 grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/60 dark:via-slate-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl reveal">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-widest uppercase mb-6">
            {hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-oswald uppercase leading-[0.9] mb-6 tracking-tight text-slate-900 dark:text-white">
            {hero.titlePrefix}{' '}
            <span className="text-accent">{hero.titleHighlight}</span>
            {hero.titleSuffix}
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-accent text-white rounded-xl font-black uppercase tracking-wider hover:bg-accent-hover transition-all transform hover:-translate-y-1 shadow-xl shadow-accent/20"
            >
              {hero.ctaWhatsapp}
            </a>
            <a
              href={hero.startHref}
              className="flex items-center justify-center px-8 py-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-1"
            >
              {hero.ctaStart}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {hero.socialProof.avatarSeeds.map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950"
                  alt={hero.socialProof.avatarAlt}
                />
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="text-slate-900 dark:text-white font-bold">{hero.socialProof.count}</span>{' '}
              {hero.socialProof.text}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default Hero;
