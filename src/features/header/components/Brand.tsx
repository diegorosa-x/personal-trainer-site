import React from "react";
import { COPY } from "../../../data/constants";

export default function Brand() {
  return (
    <a
      href="/"
      aria-label="Ir para a página inicial"
      title={COPY.site.trainerName}
      className="inline-flex items-center gap-3 rounded
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:focus-visible:ring-offset-slate-950"
    >
      <img
        src="/logo.jpeg"
        alt={`${COPY.site.trainerName} logo`}
        width={32}
        height={32}
        loading="eager"
        decoding="async"
        className="h-8 w-8 rounded-full object-cover"
      />
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        {COPY.site.trainerName}
      </span>
    </a>
  );
}
