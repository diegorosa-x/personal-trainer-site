import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { WHATSAPP_LINK } from "../../shared/whatsapp";
import { ContactCard } from "./types";
import { CONTACT_COPY } from "./copy";

const ContactSection: React.FC = () => {
  const contact = CONTACT_COPY;
  const reduceMotion = useReducedMotion();

  const sectionTitleId = "contact-title";

  const primaryCtaClass =
    "px-10 py-5 min-h-[44px] rounded-2xl font-black bg-accent text-white text-center " +
    "transition-transform duration-300 motion-reduce:transition-none " +
    "hover:scale-105 motion-reduce:hover:scale-100 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

  const secondaryCtaClass =
    "px-10 py-5 min-h-[44px] rounded-2xl font-black border-2 border-accent text-accent text-center " +
    "transition-colors duration-300 motion-reduce:transition-none " +
    "hover:bg-accent hover:text-white " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  return (
    <section
      id={contact.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 motion-reduce:transition-none"
    >
      {/* Glow decorativo */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-accent/10 blur-[110px] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 6, ease: "easeInOut", repeat: Infinity }
        }
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.div
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.h2
              id={sectionTitleId}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
              variants={fadeUp}
            >
              {contact.titlePrefix}{" "}
              <span className="text-accent">{contact.titleHighlight}</span>
            </motion.h2>

            <motion.p
              className="text-lg opacity-80 max-w-3xl mx-auto mb-10 text-slate-600 dark:text-slate-300"
              variants={fadeUp}
            >
              {contact.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-6 justify-center"
              variants={stagger}
            >
              {(contact.cards as readonly ContactCard[]).map((card) => {
                const href = WHATSAPP_LINK.whatsapp(
                  `${contact.whatsappBaseText} ${card.messageSuffix}`,
                );

                const isPrimary = card.key === "online";

                return (
                  <motion.a
                    key={card.key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir WhatsApp para ${card.title}`}
                    className={isPrimary ? primaryCtaClass : secondaryCtaClass}
                    variants={fadeUp}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  >
                    {(card.title || card.cta).toUpperCase()}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
