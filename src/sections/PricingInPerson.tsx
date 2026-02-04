import React from "react";
import { motion } from "framer-motion";
import { COPY, IN_PERSON_PLANS, WHATSAPP_LINK } from "../data/constants";

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
  </svg>
);

const PricingInPerson: React.FC = () => {
  const { pricingInPerson } = COPY;

  return (
    <section
      id={pricingInPerson.sectionId}
      className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase mb-6 tracking-tight text-slate-900 dark:text-white">
            {pricingInPerson.titlePrefix}{" "}
            <span className="text-accent">{pricingInPerson.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {pricingInPerson.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {IN_PERSON_PLANS.map((plan, idx) => {
            const href = WHATSAPP_LINK.whatsapp(
              `${pricingInPerson.whatsappTextPrefix} ${plan.name}.`
            );

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl border transition-all flex flex-col group
                  ${
                    plan.featured
                      ? "bg-slate-50 dark:bg-slate-950 border-accent/50 shadow-xl shadow-accent/10"
                      : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-accent/30 hover:shadow-2xl"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] uppercase font-black px-4 py-1 rounded-full">
                    {pricingInPerson.featuredBadge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {plan.frequency}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {plan.totalClasses}
                  </div>
                </div>

                {plan.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 grow">
                    {plan.description}
                  </p>
                )}

                <div className="mb-8">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    R$
                  </span>
                  <span className="text-4xl font-black ml-1 text-slate-900 dark:text-white">
                    {formatBRL(plan.price)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    por mês
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-slate-700 dark:text-slate-200">
                  {pricingInPerson.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-accent" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 relative overflow-hidden
                    ${
                      plan.featured
                        ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/30"
                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                    }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {pricingInPerson.buttonLabel}
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-white/15 -translate-x-full"
                    whileHover={{ x: "140%" }}
                    transition={{ duration: 0.45 }}
                  />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 p-8 reveal bg-accent/5 border border-accent/10 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-xl italic text-slate-600 dark:text-slate-300">
            {pricingInPerson.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingInPerson;
