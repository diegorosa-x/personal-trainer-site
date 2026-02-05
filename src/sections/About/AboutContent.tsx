import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AboutCopy } from "./types";

type Props = {
  about: AboutCopy;
  sectionTitleId: string;
  reduceMotion: boolean;
  fadeUp: Variants;
  stagger: Variants;
};

const AboutContent: React.FC<Props> = React.memo(
  ({ about, sectionTitleId, reduceMotion, fadeUp, stagger }) => {
    const cardBase =
      "p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl";
    const highlightClass = "text-slate-900 dark:text-white font-semibold";

    const renderParagraph = (text: string, highlight?: string) => {
      if (!highlight) return text;

      const idx = text.indexOf(highlight);
      if (idx === -1) return text;

      const before = text.slice(0, idx);
      const after = text.slice(idx + highlight.length);

      return (
        <>
          {before}
          <span className={highlightClass}>{highlight}</span>
          {after}
        </>
      );
    };

    return (
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.h2
          id={sectionTitleId}
          className="text-4xl md:text-5xl font-black font-oswald uppercase mb-8 leading-tight text-slate-900 dark:text-white"
          variants={fadeUp}
        >
          {about.titleLine1} <br />
          <span className="text-accent">{about.titleLine2}</span>
        </motion.h2>

        <motion.div
          className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
          variants={stagger}
        >
          {about.paragraphs.map((text, index) => {
            const highlight =
              index === 0
                ? about.highlights.p1
                : index === 1
                  ? about.highlights.p2
                  : undefined;

            return (
              <motion.p key={text} variants={fadeUp}>
                {renderParagraph(text, highlight)}
              </motion.p>
            );
          })}
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-6 mt-12" variants={stagger}>
          {about.stats.map((item) => (
            <motion.div
              key={item.label}
              className={cardBase}
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={reduceMotion ? undefined : { duration: 0.2, ease: "easeOut" }}
            >
              <div className="text-3xl font-black font-oswald text-accent mb-2">
                {item.value}
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  }
);

AboutContent.displayName = "AboutContent";
export default AboutContent;
