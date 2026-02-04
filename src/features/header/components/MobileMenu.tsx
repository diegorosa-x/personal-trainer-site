import React from "react";
import { COPY } from "../../../data/constants";

export default function MobileMenu({
  open,
  menuId,
  menuButtonRef,
  mobileMenuRef,
  firstLinkRef,
  toggle,
  close,
}: {
  open: boolean;
  menuId: string;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
  mobileMenuRef: React.RefObject<HTMLDivElement | null>;
  firstLinkRef: React.RefObject<HTMLAnchorElement | null>;

  toggle: () => void;
  close: () => void;
}) {
  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        onClick={toggle}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls={menuId}
        className="
          md:hidden
          p-2 rounded-full
          bg-slate-100 dark:bg-slate-900
          text-slate-700 dark:text-slate-200
          hover:text-accent
          transition-all duration-200
          active:scale-95
          focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
          motion-reduce:transition-none motion-reduce:transform-none
        "
      >
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        id={menuId}
        ref={mobileMenuRef}
        aria-hidden={!open}
        className={`
          md:hidden absolute left-0 right-0 top-full px-6 origin-top
          transition-[opacity,transform] duration-200
          ${open ? "opacity-100 scale-y-100 translate-y-0" : "pointer-events-none opacity-0 scale-y-95 -translate-y-2"}
          motion-reduce:transition-none motion-reduce:transform-none
        `}
      >
        <div className="mt-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl p-4">
          <nav
            aria-label="Navegação mobile"
            className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-200"
          >
            {COPY.nav.items.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                ref={idx === 0 ? firstLinkRef : undefined}
                className="
                  py-2 px-2 rounded-lg
                  hover:text-accent hover:bg-slate-100/60 dark:hover:bg-slate-900/60
                  transition-colors
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            onClick={close}
            className="
              mt-4 inline-flex w-full justify-center
              bg-accent text-white
              px-6 py-3
              rounded-full
              text-sm font-bold uppercase tracking-wide
              hover:bg-accent-hover
              transition-all
              active:scale-95
              shadow-lg shadow-accent/20
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-accent
              motion-reduce:transition-none motion-reduce:transform-none
            "
          >
            {COPY.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
