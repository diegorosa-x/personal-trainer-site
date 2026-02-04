import React from "react";
import { COPY, WHATSAPP_LINK } from "../data/constants.ts";

const Hero: React.FC = () => {
  const { hero } = COPY;

  const whatsappUrl = WHATSAPP_LINK.whatsapp(hero.whatsappText);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background (decorativo) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={hero.background.src}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-30 grayscale scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/60 dark:via-slate-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-block px-3 py-1 mb-6 rounded-full border border-accent/20 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase">
            {hero.badge}
          </span>

          {/* H1 */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-black font-oswald uppercase leading-[0.9] tracking-tight text-slate-900 dark:text-white mb-6"
          >
            {hero.titlePrefix}{" "}
            <span className="text-accent">{hero.titleHighlight}</span>
            {hero.titleSuffix}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] rounded-xl bg-accent text-white font-black uppercase tracking-wider shadow-xl shadow-accent/20
                         hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                         transition-transform motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              {hero.ctaWhatsapp}
            </a>

            <a
              href={hero.startHref}
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700
                         bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold uppercase tracking-wider
                         hover:bg-slate-200 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
                         transition-transform motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              {hero.ctaStart}
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {hero.socialProof.avatarSeeds.map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  alt={hero.socialProof.avatarAlt}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950"
                />
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-900 dark:text-white">
                {hero.socialProof.count}
              </span>{" "}
              {hero.socialProof.text}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[100px] rounded-full"
      />
    </section>
  );
};

export default Hero;
