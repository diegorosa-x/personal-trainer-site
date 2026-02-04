import React from "react";
import { COPY } from "../../../data/constants";

const navItemClass =
  "rounded hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

export default function DesktopNav() {
  return (
    <nav
      aria-label="Navegação principal"
      className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300"
    >
      {COPY.nav.items.map((item) => (
        <a key={item.href} href={item.href} className={navItemClass}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
