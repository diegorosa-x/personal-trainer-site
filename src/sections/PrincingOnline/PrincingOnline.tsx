import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { COPY, WHATSAPP_LINK, ONLINE_FEATURES } from "../../data/constants.ts";
import { FeatureList } from "./FeatureList";
import { UrgencyCard } from "./UrgencyCard";

const PricingOnline: React.FC = () => {
  const { pricingOnline } = COPY;
  const reduceMotion = useReducedMotion();

  const whatsappUrl = WHATSAPP_LINK.whatsapp(pricingOnline.whatsappText);
  const sectionTitleId = "pricing-online-title";

  const cardClass =
    "bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 " +
    "border border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-xl dark:shadow-2xl";

  const ctaClass =
    "w-full sm:w-auto px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-center " +
    "bg-accent text-white hover:bg-accent-hover shadow-xl shadow-accent/20 " +
    "transition-colors duration-300 motion-reduce:transition-none " +
    "transition-transform motion-reduce:transition-none " +
    "hover:scale-105 motion-reduce:hover:scale-100 active:scale-95 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  return (
    <section
      id={pricingOnline.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-950 relative scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className={cardClass}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <motion.div
              className="p-12 md:p-20"
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
            >
              <motion.h2
                id={sectionTitleId}
                className="text-4xl md:text-5xl font-black font-oswald uppercase mb-6 tracking-tight text-slate-900 dark:text-white"
                variants={fadeUp}
              >
                {pricingOnline.titlePrefix}{" "}
                <span className="text-accent">{pricingOnline.titleHighlight}</span>
              </motion.h2>

              <motion.p
                className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed"
                variants={fadeUp}
              >
                {pricingOnline.description}
              </motion.p>

              <motion.div variants={fadeUp}>
                <FeatureList features={ONLINE_FEATURES} />
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-8"
                variants={fadeUp}
              >
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400">R$</span>
                    <span className="text-5xl font-black font-oswald text-slate-900 dark:text-white">
                      {pricingOnline.price.value}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mt-1">
                    {pricingOnline.price.label}
                  </p>
                </div>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${pricingOnline.cta} (abre no WhatsApp)`}
                  className={ctaClass}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {pricingOnline.cta}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Media */}
            <motion.div
              className="relative h-64 lg:h-auto min-h-[400px]"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src={pricingOnline.image.src}
                alt={pricingOnline.image.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0
                           transition-[filter,opacity] duration-1000 motion-reduce:transition-none"
                // leve “ken burns” (só transform) — desliga em reduce motion
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1.03, 1.07, 1.03], y: [0, -10, 0] }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 12, ease: "linear", repeat: Infinity }
                }
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-slate-900 via-transparent to-transparent hidden lg:block"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent to-transparent lg:hidden"
              />

              <motion.div
                className="absolute bottom-12 right-12"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={reduceMotion ? undefined : { duration: 0.5, ease: "easeOut", delay: 0.1 }}
                // flutuação discreta (transform only)
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                // separa o timing do animate, pra não conflitar
                // (Framer usa merge; aqui fica suave)
                // @ts-expect-error - ok em runtime, TS às vezes reclama da combinação
                transition={{
                  ...(reduceMotion
                    ? {}
                    : { duration: 3.2, ease: "easeInOut", repeat: Infinity }),
                }}
              >
                <UrgencyCard
                  title={pricingOnline.urgency.title}
                  subtitle={pricingOnline.urgency.subtitle}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingOnline;
