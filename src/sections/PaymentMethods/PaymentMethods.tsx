import React from "react";
import { CreditCard, Wallet, QrCode } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { PaymentIconType, PaymentMethod } from "./types";
import { PAYMENT_METHODS_COPY } from "./copy";

const iconMap: Record<PaymentIconType, React.ElementType> = {
  pix: QrCode,
  card: CreditCard,
  cash: Wallet,
};

const PaymentMethods: React.FC = () => {
  const paymentMethods = PAYMENT_METHODS_COPY;
  const reduceMotion = useReducedMotion();
  const sectionTitleId = "payment-methods-title";

  const cardBaseClass =
    "p-10 rounded-3xl border text-center space-y-4 " +
    "bg-slate-50 dark:bg-slate-900 " +
    "border-slate-200 dark:border-slate-800 " +
    "transition-colors transition-shadow transition-transform duration-300 " +
    "hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 " +
    "hover:-translate-y-2 motion-reduce:hover:translate-y-0 " +
    "motion-reduce:transition-none";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  return (
    <section
      id={paymentMethods.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-900/30 transition-colors duration-300 motion-reduce:transition-none"
    >
      <div className="container mx-auto px-6">
        <motion.header
          className="text-center mb-16"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <h2
            id={sectionTitleId}
            className="text-4xl md:text-5xl font-black font-oswald uppercase mb-4 text-slate-900 dark:text-white"
          >
            {paymentMethods.titlePrefix}{" "}
            <span className="text-accent">{paymentMethods.titleHighlight}</span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 font-medium uppercase text-xs tracking-widest">
            {paymentMethods.subtitle}
          </p>
        </motion.header>

        <motion.ul
          className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          {(paymentMethods.methods as readonly PaymentMethod[]).map(
            (method) => {
              const Icon = iconMap[method.icon.type];

              return (
                <motion.li key={method.icon.type} variants={fadeUp}>
                  <article className={cardBaseClass}>
                    <div className="flex justify-center">
                      <Icon
                        size={40}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {method.title}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-widest">
                      {method.description}
                    </p>
                  </article>
                </motion.li>
              );
            },
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default PaymentMethods;
