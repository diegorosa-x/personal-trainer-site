import React from "react";

export default function SkipToContent({ targetId = "conteudo" }: { targetId?: string }) {
  return (
    <a
      href={`#${targetId}`}
      className="
        sr-only focus:not-sr-only
        fixed top-2 left-2 z-[60]
        rounded-full px-4 py-2
        bg-white text-slate-900 shadow
        dark:bg-slate-950 dark:text-white
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
      "
    >
      Pular para o conteúdo
    </a>
  );
}
