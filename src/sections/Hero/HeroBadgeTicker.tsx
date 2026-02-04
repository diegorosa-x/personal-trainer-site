import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  items: readonly string[];
  ariaLabel: string;
  className?: string;
};

export const HeroBadgeTicker: React.FC<Props> = React.memo(
  ({ items, ariaLabel, className }) => {
    const reduceMotion = useReducedMotion();

    // lista duplicada = loop contínuo
    const loopItems = React.useMemo(() => [...items, ...items], [items]);

    return (
      <span
        className={
          "inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 " +
          (className ?? "")
        }
      >
        <span
          className="relative overflow-hidden"
          style={{ height: "1.25rem" }}
          aria-label={ariaLabel}
        >
          {reduceMotion ? (
            <span className="block text-accent text-xs font-bold tracking-widest uppercase">
              {items[0] ?? ariaLabel}
            </span>
          ) : (
            <motion.div
              className="will-change-transform"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: Math.max(6, items.length * 1.5),
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopItems.map((text, i) => (
                <div
                  key={`${text}-${i}`}
                  className="text-accent text-xs font-bold tracking-widest uppercase leading-5"
                >
                  {text}
                </div>
              ))}
            </motion.div>
          )}
        </span>
      </span>
    );
  }
);

HeroBadgeTicker.displayName = "HeroBadgeTicker";
