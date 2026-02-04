import React from "react";
import { COPY } from "../data/constants.ts";

const CURRENT_YEAR = new Date().getFullYear();

const INSTAGRAM_URL = "https://www.instagram.com/higorlfreirebjj";
const INSTAGRAM_LABEL = "Instagram do Higor Freire";

const Footer: React.FC = () => {
  const socialLinkBase =
    "inline-flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 " +
    "text-slate-600 dark:text-white " +
    "hover:bg-slate-200 dark:hover:bg-slate-800 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 " +
    "transition-colors motion-reduce:transition-none";

  return (
    <footer
      aria-label="Rodapé"
      className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 motion-reduce:transition-none"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding / Home link */}
          <a
            href="/"
            className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
            aria-label={`Ir para a página inicial de ${COPY.site.trainerName}`}
            title={`Home — ${COPY.site.trainerName}`}
          >
            {/* Logo (evita CLS com width/height) */}
            <img
              src="/logo.jpeg"
              alt={`${COPY.site.trainerName} — logo`}
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
              className="h-8 w-8 rounded-full object-cover"
              // Se você estiver em Next.js, considere trocar por next/image (comentário apenas).
            />

            <span className="flex flex-col">
              <span className="text-xl font-bold uppercase tracking-tighter leading-none text-slate-900 dark:text-white">
                {COPY.site.trainerName}
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
                {COPY.site.trainerRole}
              </span>
            </span>
          </a>

          {/* Rights */}
          <div className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            {COPY.footer.rights(CURRENT_YEAR)}
          </div>

          {/* Social nav */}
          <nav aria-label="Redes sociais">
            <ul className="flex gap-6">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={INSTAGRAM_LABEL}
                  title="Instagram"
                  className={`${socialLinkBase} w-11 h-11`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.058.935 20.39.527 19.601.221c-.765-.296-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
