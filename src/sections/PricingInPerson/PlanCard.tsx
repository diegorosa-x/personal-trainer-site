import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "./Icons";
import { Props } from "./types";

export const PlanCard: React.FC<Props> = ({
  plan,
  idx,
  reduceMotion,
  perks,
  href,
  buttonLabel,
  featuredBadge,
}) => {
  const isFeatured = Boolean(plan.featured);

  const cardBase =
    "relative p-8 rounded-3xl border flex flex-col group " +
    "transition-colors duration-300 motion-reduce:transition-none " +
    "transition-transform motion-reduce:transition-none " +
    "hover:-translate-y-2 motion-reduce:hover:translate-y-0 " +
    "hover:shadow-2xl";

  const featuredCard =
    "bg-slate-50 dark:bg-slate-950 border-accent/50 shadow-xl shadow-accent/10";

  const regularCard =
    "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-accent/30";

  const buttonBase =
    "w-full min-h-[44px] py-3 rounded-xl font-bold text-center inline-flex items-center justify-center gap-2 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "focus-visible:ring-accent focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 " +
    "transition-colors duration-300 motion-reduce:transition-none " +
    "transition-transform motion-reduce:transition-none active:scale-[0.98]";

  const featuredButton =
    "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/30";

  const regularButton =
    "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white";

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      transition={
        reduceMotion ? undefined : { delay: idx * 0.08, duration: 0.45 }
      }
      className={`${cardBase} ${isFeatured ? featuredCard : regularCard}`}
    >
      <article className="flex flex-col h-full">
        {isFeatured && (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] uppercase font-black px-4 py-1 rounded-full"
            aria-label={featuredBadge}
          >
            {featuredBadge}
          </div>
        )}

        {/* HEADER */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
            {plan.name}
          </h3>

          {plan.description && (
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
              {plan.description}
            </p>
          )}
        </div>

        {/* PREÇO POR AULA (GRANDE) */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span
              className={`text-5xl font-black ${
                plan.billingType === "monthly"
                  ? "text-accent"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              R${plan.ratePerClass}
            </span>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              /aula
            </span>
          </div>

          {plan.billingType === "monthly" ? (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              *Desconto mensal válido a partir de 3x na semana.
            </p>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              *Sem desconto
            </p>
          )}
        </div>

        {/* LISTA DE FREQUÊNCIAS + TOTAL MENSAL */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
            Frequências
          </h4>

          <ul className="space-y-2">
            {plan.options.map((opt) => (
              <li
                key={opt.label}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {opt.label}
                </span>

                <span
                  className={`text-sm font-bold ${
                    opt.disabled
                      ? "text-slate-500 dark:text-slate-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {opt.totalLabel}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* PERKS */}
        <ul className="space-y-3 mb-8 text-sm text-slate-700 dark:text-slate-200">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-accent" />
              {perk}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${buttonLabel} — ${plan.name} (abre no WhatsApp)`}
          className={`${buttonBase} ${
            isFeatured ? featuredButton : regularButton
          } relative overflow-hidden`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {buttonLabel}
            <ArrowRightIcon className="w-4 h-4" />
          </span>

          <span
            aria-hidden="true"
            className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-[140%]
                       transition-transform duration-500 motion-reduce:transition-none"
          />
        </a>
      </article>
    </motion.li>
  );
};
