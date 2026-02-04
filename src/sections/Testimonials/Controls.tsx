import React from "react";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

export default function Controls({ onPrev, onNext }: Props) {
  const btn =
    "min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 backdrop-blur " +
    "text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-950 transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={onPrev} className={btn} aria-label="Ver depoimento anterior">
        ‹
      </button>
      <button type="button" onClick={onNext} className={btn} aria-label="Ver próximo depoimento">
        ›
      </button>
    </div>
  );
}
