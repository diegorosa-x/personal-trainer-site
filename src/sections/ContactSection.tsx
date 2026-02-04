import React from "react";
import { COPY, WHATSAPP_LINK } from "../data/constants";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const { contact } = COPY;

  return (
    <section
      id={contact.sectionId}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
        >
          <h2
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight 
               text-slate-900 dark:text-white"
          >
            {contact.titlePrefix}{" "}
            <span className="text-accent">{contact.titleHighlight}</span>
          </h2>

          <p
            className="text-lg opacity-80 max-w-3xl mx-auto mb-10 
              text-slate-600 dark:text-slate-300"
          >
            {contact.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href={WHATSAPP_LINK.whatsapp(
                `${contact.whatsappBaseText} ${contact.cards[0].messageSuffix}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl font-black bg-accent text-white hover:scale-105 transition"
            >
              CONSULTORIA ONLINE
            </a>

            <a
              href={WHATSAPP_LINK.whatsapp(
                `${contact.whatsappBaseText} ${contact.cards[1].messageSuffix}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl font-black border-2 border-accent text-accent hover:bg-accent hover:text-white transition"
            >
              TREINO PRESENCIAL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
