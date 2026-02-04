import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
};

export const HeroBackground: React.FC<Props> = React.memo(({ src }) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <motion.img
        src={src}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover opacity-30 grayscale scale-110"
        animate={
          reduceMotion ? undefined : { scale: [1.1, 1.14, 1.1], y: [0, -10, 0] }
        }
        transition={
          reduceMotion ? undefined : { duration: 14, ease: "linear", repeat: Infinity }
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/60 dark:via-slate-950/60 to-transparent" />
    </div>
  );
});

HeroBackground.displayName = "HeroBackground";
