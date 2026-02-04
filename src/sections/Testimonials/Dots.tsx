import React from "react";

type Props = {
  count: number;
  activeIndex: number;
  onGoTo: (index: number) => void;
};

export default function Dots({ count, activeIndex, onGoTo }: Props) {
  return (
    <div
      className="mt-6 flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Navegação do carrossel"
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onGoTo(i)}
            className={
              "h-2.5 rounded-full transition-all motion-reduce:transition-none " +
              (isActive ? "w-8 bg-accent" : "w-2.5 bg-slate-300 dark:bg-slate-700")
            }
            aria-label={`Ir para depoimento ${i + 1}`}
            aria-current={isActive ? "true" : undefined}
          />
        );
      })}
    </div>
  );
}
