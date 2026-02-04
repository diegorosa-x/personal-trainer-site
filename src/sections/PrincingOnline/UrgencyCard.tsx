import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export const UrgencyCard: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="absolute bottom-12 right-12 bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 p-6 rounded-2xl max-w-xs animate-pulse motion-reduce:animate-none">
      <p className="text-accent font-black text-4xl mb-1">{title}</p>
      <p className="text-slate-900 dark:text-white font-bold uppercase tracking-widest">
        {subtitle}
      </p>
    </div>
  );
};
