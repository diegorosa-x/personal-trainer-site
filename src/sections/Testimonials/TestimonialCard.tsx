import React from "react";
import { motion } from "framer-motion";
import type { Testimonial } from "../../types";
import { STARS } from "./data";

type Props = {
  t: Testimonial;
  index: number;
  total: number;
  reduceMotion: boolean;
  ratingLabel: string;
};

const cardClass =
  "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] shadow-sm flex flex-col group " +
  "transition-colors duration-300 motion-reduce:transition-none " +
  "hover:border-accent/30 hover:shadow-xl";

const avatarClass =
  "w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-800 " +
  "transition-colors duration-300 motion-reduce:transition-none group-hover:border-accent";

const badgeClass =
  "text-[10px] font-black uppercase tracking-widest bg-accent text-white px-2 py-0.5 rounded";

export default function TestimonialCard({
  t,
  index,
  total,
  reduceMotion,
  ratingLabel,
}: Props) {
  return (
    <motion.article
      data-slide
      className={`
        ${cardClass}
        snap-start
        min-w-[85%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[32%]
      `}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={
        reduceMotion
          ? undefined
          : { duration: 0.45, ease: "easeOut", delay: index * 0.03 }
      }
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
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

      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-accent" aria-label={ratingLabel} role="img">
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

        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {index + 1}/{total}
        </span>
      </div>
    </motion.article>
  );
}
