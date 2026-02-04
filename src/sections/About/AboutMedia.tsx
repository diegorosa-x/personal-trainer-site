import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { AboutCopy } from "../../types";

type Props = {
  about: AboutCopy;
  reduceMotion: boolean;
  fadeUp: Variants;
};

const AboutMedia: React.FC<Props> = React.memo(({ about, reduceMotion, fadeUp }) => {
  return (
    <motion.div
      className="relative group"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {/* Glow (decorativo) */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl motion-reduce:transition-none"
        animate={
          reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.02, 1] }
        }
        transition={
          reduceMotion ? undefined : { duration: 4.5, ease: "easeInOut", repeat: Infinity }
        }
      />

      <motion.div
        className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={reduceMotion ? undefined : { duration: 0.25, ease: "easeOut" }}
      >
        <img
          src={about.image.src}
          alt={about.image.alt}
          width={900}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />

        {/* Credential/Highlight */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={reduceMotion ? undefined : { duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-1">
            {about.cref.label}
          </p>
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {about.cref.value}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

AboutMedia.displayName = "AboutMedia";
export default AboutMedia;
