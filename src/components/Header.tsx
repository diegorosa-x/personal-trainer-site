import React, { useEffect, useState } from "react";
import { COPY } from "../data/constants.ts";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Higor Freire Logo"
            className="h-8 w-auto rounded-full object-cover"
          />

          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            {COPY.site.trainerName}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300">
          {COPY.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onToggleTheme}
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
    "
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l-.707-.707M7.757 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}

            {/* Mobile: texto visível. Desktop: escondido */}
            <span className="text-xs font-bold uppercase tracking-widest md:hidden">
              Tema
            </span>
          </button>

          <a
            href="#contato"
            className="
      bg-accent text-white
      px-5 sm:px-6 py-2
      rounded-full
      text-sm font-bold uppercase tracking-wide
      hover:bg-accent-hover
      transition-all
      active:scale-95
      shadow-lg shadow-accent/20
    "
          >
            {COPY.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
