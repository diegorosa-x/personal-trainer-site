import React, { useMemo } from "react";

import Brand from "./Brand";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import SkipToContent from "./SkipToContent";

import { COPY } from "../../../data/constants";
import { useMobileMenuA11y } from "../hooks/useMobileMenuA11y";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const {
    open,
    menuId,
    menuButtonRef,
    mobileMenuRef,
    firstLinkRef,
    toggle,
    close,
  } = useMobileMenuA11y();

  const headerClassName = useMemo(
    () =>
      [
        "fixed top-0 left-0 right-0 z-50",
        "min-h-[72px] flex items-center",
        "transition-[background-color,box-shadow,backdrop-filter] duration-300",
        "bg-white/80 dark:bg-slate-950/90 backdrop-blur-md shadow-xl",
        "motion-reduce:transition-none",
      ].join(" "),
    []
  );

  return (
    <>
      {/* A11Y / SEO */}
      <SkipToContent targetId="conteudo" />

      <header className={headerClassName}>
        <div className="container mx-auto px-6 flex justify-between items-center w-full">
          {/* Logo */}
          <Brand />

          {/* Navegação desktop */}
          <DesktopNav />

          {/* Ações */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />

            {/* CTA desktop */}
            <a
              href="#contato"
              onClick={close}
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
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90
                focus-visible:ring-offset-2 focus-visible:ring-offset-accent
                motion-reduce:transition-none motion-reduce:transform-none
              "
            >
              {COPY.nav.cta}
            </a>

            {/* Menu mobile */}
            <MobileMenu
              open={open}
              menuId={menuId}
              menuButtonRef={menuButtonRef}
              mobileMenuRef={mobileMenuRef}
              firstLinkRef={firstLinkRef}
              toggle={toggle}
              close={close}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
