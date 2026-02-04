import React from "react";
import { COPY, WHATSAPP_LINK } from "../../data/constants.ts";
import { motion, useReducedMotion } from "framer-motion";
import { HeroBadgeTicker } from "./HeroBadgeTicker";
import { HeroBackground } from "./HeroBackground.temp.tsx";

const Hero: React.FC = () => {
  const { hero } = COPY;
  const reduceMotion = useReducedMotion();

  const whatsappUrl = WHATSAPP_LINK.whatsapp(hero.whatsappText);

  const badgeItems = React.useMemo(
    () => [
      hero.badge,
      "Performance real",
      "Resultados consistentes",
      "Treino sem enrolação",
      "Foco em evolução",
    ],
    [hero.badge]
  );

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <HeroBackground src={hero.background.src} />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <HeroBadgeTicker items={badgeItems} ariaLabel={hero.badge} />
          </div>

          <motion.h1
            id="hero-title"
            className="text-5xl md:text-7xl lg:text-8xl font-black font-oswald uppercase leading-[0.9] tracking-tight text-slate-900 dark:text-white mb-6"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.05, ease: "easeOut" }}
          >
            {hero.titlePrefix}{" "}
            <span className="text-accent">{hero.titleHighlight}</span>
            {hero.titleSuffix}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.18, ease: "easeOut" }}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] rounded-xl bg-accent text-white font-black uppercase tracking-wider shadow-xl shadow-accent/20
                         hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                         transition-transform motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {hero.ctaWhatsapp}
            </motion.a>

            <motion.a
              href={hero.startHref}
              className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700
                         bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold uppercase tracking-wider
                         hover:bg-slate-200 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
                         transition-transform motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              {hero.ctaStart}
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? undefined : { duration: 0.6, delay: 0.24, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[100px] rounded-full"
      />
    </section>
  );
};

export default Hero;
