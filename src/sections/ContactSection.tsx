import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { COPY, WHATSAPP_LINK } from "../data/constants";

type ContactCard = {
  readonly key: "online" | "presencial";
  readonly title: string;
  readonly cta: string;
  readonly messageSuffix: string;
};

const ContactSection: React.FC = () => {
  const { contact } = COPY;
  const reduceMotion = useReducedMotion();

  const sectionTitleId = "contact-title";

  const whatsappUrlOnline = WHATSAPP_LINK.whatsapp(
    `${contact.whatsappBaseText} ${contact.cards[0].messageSuffix}`,
  );

  const whatsappUrlInPerson = WHATSAPP_LINK.whatsapp(
    `${contact.whatsappBaseText} ${contact.cards[1].messageSuffix}`,
  );

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

  return (
    <section
      id={contact.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300 motion-reduce:transition-none"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={reduceMotion ? undefined : { once: true }}
          transition={reduceMotion ? undefined : { duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
        >
          <h2
            id={sectionTitleId}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            {contact.titlePrefix}{" "}
            <span className="text-accent">{contact.titleHighlight}</span>
          </h2>

          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-10 text-slate-600 dark:text-slate-300">
            {contact.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {(contact.cards as readonly ContactCard[]).map((card) => {
              const href = WHATSAPP_LINK.whatsapp(
                `${contact.whatsappBaseText} ${card.messageSuffix}`,
              );

              const isPrimary = card.key === "online";

              return (
                <a
                  key={card.key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir WhatsApp para ${card.title}`}
                  className={isPrimary ? primaryCtaClass : secondaryCtaClass}
                >
                  {(card.title || card.cta).toUpperCase()}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
