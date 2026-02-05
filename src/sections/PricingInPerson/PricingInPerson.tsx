import React from "react";
import { useReducedMotion } from "framer-motion";
import { PlanCard } from "./PlanCard";
import { buildPlanWhatsappHref } from "./utils";
import { IN_PERSON_PLANS, PRICING_IN_PERSON_COPY } from "./copy";
import { WHATSAPP_LINK } from "../../shared/whatsapp";
import { InPersonPlan } from "./types";

const PricingInPerson: React.FC = () => {
  const pricingInPerson = PRICING_IN_PERSON_COPY;
  const reduceMotion = useReducedMotion();

  const sectionTitleId = "pricing-in-person-title";

  return (
    <section
      id={pricingInPerson.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-300 motion-reduce:transition-none scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id={sectionTitleId}
            className="text-4xl md:text-5xl font-black font-oswald uppercase mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            {pricingInPerson.titlePrefix}{" "}
            <span className="text-accent">
              {pricingInPerson.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {pricingInPerson.description}
          </p>
        </header>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto"
          role="list"
        >
          {" "}
          {(IN_PERSON_PLANS as InPersonPlan[]).map((plan, idx) => {
            const href = buildPlanWhatsappHref(
              WHATSAPP_LINK.whatsapp,
              pricingInPerson.whatsappTextPrefix,
              plan.name,
            );

            return (
              <PlanCard
                key={plan.id}
                plan={plan}
                idx={idx}
                reduceMotion={Boolean(reduceMotion)}
                perks={pricingInPerson.perks}
                href={href}
                buttonLabel={pricingInPerson.buttonLabel}
                featuredBadge={pricingInPerson.featuredBadge}
              />
            );
          })}
        </ul>

        <div className="mt-16 p-8 bg-accent/5 border border-accent/10 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-xl italic text-slate-600 dark:text-slate-300">
            {pricingInPerson.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingInPerson;
