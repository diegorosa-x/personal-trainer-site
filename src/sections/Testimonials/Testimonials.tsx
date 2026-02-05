import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Carousel from "./Carousel";
import { EXTRA_TESTIMONIALS, TESTIMONIALS, TESTIMONIALS_COPY } from "./copy.ts";
import { Testimonial } from "./types.ts";

const sectionClass =
  "py-24 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden " +
  "transition-colors duration-300 motion-reduce:transition-none scroll-mt-24";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const Testimonials: React.FC = () => {
  const testimonials = TESTIMONIALS_COPY;
  const reduceMotion = useReducedMotion();
  const sectionTitleId = "testimonials-title";

  const items = React.useMemo<readonly Testimonial[]>(
    () => [...TESTIMONIALS, ...EXTRA_TESTIMONIALS],
    []
  );

  return (
    <section
      id={testimonials.sectionId}
      aria-labelledby={sectionTitleId}
      className={sectionClass}
    >
      <div className="container mx-auto px-6">
        <motion.header
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="max-w-2xl">
            <h2
              id={sectionTitleId}
              className="text-4xl md:text-5xl font-black font-oswald uppercase mb-4 tracking-tight text-slate-900 dark:text-white"
            >
              {testimonials.titlePrefix}{" "}
              <span className="text-accent italic">{testimonials.titleHighlight}</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {testimonials.description}
            </p>
          </div>

          <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl hidden lg:block">
            <p className="text-accent font-bold text-sm uppercase tracking-widest">
              {testimonials.proofPill}
            </p>
          </div>
        </motion.header>

        <Carousel items={items} reduceMotion={Boolean(reduceMotion)} />
      </div>
    </section>
  );
};

export default Testimonials;
