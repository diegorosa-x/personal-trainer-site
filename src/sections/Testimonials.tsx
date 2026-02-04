import React from "react";
import { COPY, TESTIMONIALS } from "../data/constants.ts";

const STARS = [1, 2, 3, 4, 5] as const;

const Testimonials: React.FC = () => {
  const { testimonials } = COPY;

  const sectionTitleId = "testimonials-title";
  const ratingLabel = "Avaliação: 5 de 5";

  const sectionClass =
    "py-24 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden " +
    "transition-colors duration-300 motion-reduce:transition-none scroll-mt-24";

  const cardClass =
    "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] shadow-sm flex flex-col group " +
    "transition-colors duration-300 motion-reduce:transition-none " +
    "hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 " +
    "motion-reduce:hover:translate-y-0";

  const avatarClass =
    "w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-800 " +
    "transition-colors duration-300 motion-reduce:transition-none group-hover:border-accent";

  const badgeClass =
    "text-[10px] font-black uppercase tracking-widest bg-accent text-white px-2 py-0.5 rounded";

  return (
    <section
      id={testimonials.sectionId}
      aria-labelledby={sectionTitleId}
      className={sectionClass}
    >
      <div className="container mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2
              id={sectionTitleId}
              className="text-4xl md:text-5xl font-black font-oswald uppercase mb-4 tracking-tight text-slate-900 dark:text-white"
            >
              {testimonials.titlePrefix}{" "}
              <span className="text-accent italic">
                {testimonials.titleHighlight}
              </span>
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
        </header>

        <ul className="grid md:grid-cols-3 gap-8 mb-20" role="list">
          {TESTIMONIALS.map((t) => (
            <li key={t.id} className={cardClass}>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className={avatarClass}
                />

                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {t.name}
                  </h3>
                  <span className={badgeClass}>{t.resultType}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed flex-grow">
                <q>{t.text}</q>
              </p>

              <div
                className="flex gap-1 text-accent"
                aria-label={ratingLabel}
                role="img"
              >
                {STARS.map((s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
