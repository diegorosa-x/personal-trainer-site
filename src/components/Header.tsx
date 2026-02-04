import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { COPY } from "../data/constants.ts";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const SCROLL_Y_THRESHOLD = 20;

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const reactId = useId();
  const mobileMenuId = useMemo(() => `mobile-menu-${reactId}`, [reactId]);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  // ---------- Performance: Scroll listener com passive + rAF ----------
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const next = window.scrollY > SCROLL_Y_THRESHOLD;
        setIsScrolled((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    // Inicializa corretamente caso já carregue scrollado
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  // ---------- A11Y: fechar menu, restaurar foco ----------
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  // ---------- A11Y: ESC fecha + Focus trap ----------
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobile();
        return;
      }

      if (e.key !== "Tab") return;

      const container = mobileMenuRef.current;
      if (!container) return;

      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === container)) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  // ---------- A11Y: lock scroll do body + foco inicial + restaurar foco ----------
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move foco para o primeiro link do menu
    window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      // volta foco pro botão do menu
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  // ---------- SEO/A11Y: classes do header sem CLS (altura constante) ----------
  const headerClassName = useMemo(() => {
    // Mantém altura constante (min-h) e muda apenas fundo/sombra/blur (menos CLS).
    return [
      "fixed top-0 left-0 right-0 z-50",
      "transition-[background-color,box-shadow,backdrop-filter] duration-300",
      "min-h-[72px] flex items-center", // altura estável
      isScrolled
        ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-md shadow-xl"
        : "bg-transparent",
      "motion-reduce:transition-none",
    ].join(" ");
  }, [isScrolled]);

  const navItemClass =
    "hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded";

  return (
    <>
      {/* Skip to content (garanta que exista um elemento com id="conteudo" no <main>) */}
      <a
        href="#conteudo"
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

      <header className={headerClassName}>
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            {/* Logo como link (SEO + UX) */}
            <a
              href="/"
              aria-label="Ir para a página inicial"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded"
              title={COPY.site.trainerName}
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
          </div>

          {/* Desktop nav */}
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

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Toggle theme (sempre visível) */}
            <button
              onClick={onToggleTheme}
              type="button"
              title={COPY.nav.toggleAria}
              aria-label={COPY.nav.toggleAria}
              className="
                flex items-center gap-2
                p-2 rounded-full
                bg-slate-100 dark:bg-slate-900
                text-slate-600 dark:text-slate-400
                hover:text-accent
                transition-all duration-200
                active:scale-95
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
                motion-reduce:transition-none motion-reduce:transform-none
              "
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l-.707-.707M7.757 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}

              <span className="text-xs font-bold uppercase tracking-widest md:hidden">Tema</span>
            </button>

            {/* CTA: só no desktop */}
            <a
              href="#contato"
              className="
                hidden md:inline-flex
                bg-accent text-white
                px-5 sm:px-6 py-2
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

            {/* Hamburger: só no mobile */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
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
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown (transform/opacity em vez de max-height) */}
        <div
          id={mobileMenuId}
          ref={mobileMenuRef}
          aria-hidden={!mobileOpen}
          className={`
            md:hidden
            absolute left-0 right-0 top-full
            px-6
            transition-[opacity,transform] duration-200
            origin-top
            ${mobileOpen ? "opacity-100 scale-y-100 translate-y-0" : "pointer-events-none opacity-0 scale-y-95 -translate-y-2"}
            motion-reduce:transition-none motion-reduce:transform-none
          `}
        >
          <div className="mt-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl p-4">
            <nav aria-label="Navegação mobile" className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-200">
              {COPY.nav.items.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  ref={idx === 0 ? firstMobileLinkRef : undefined}
                  className={`
                    py-2 px-2 rounded-lg
                    hover:text-accent hover:bg-slate-100/60 dark:hover:bg-slate-900/60
                    transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contato"
              onClick={closeMobile}
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
      </header>
    </>
  );
};

export default Header;
