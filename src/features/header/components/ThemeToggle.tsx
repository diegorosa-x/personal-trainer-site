import { NAV_COPY } from "../../../copy";

export default function ThemeToggle({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  return (
    <button
      onClick={onToggleTheme}
      type="button"
      title={NAV_COPY.toggleAria}
      aria-label={NAV_COPY.toggleAria}
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
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}

      <span className="text-xs font-bold uppercase tracking-widest md:hidden">
        Tema
      </span>
    </button>
  );
}
