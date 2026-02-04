import React from "react";
import { COPY } from "../data/constants.ts";

const About: React.FC = () => {
  const { about } = COPY;

  const sectionTitleId = "about-title";

  const cardBase =
    "p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl";

  const highlightClass = "text-slate-900 dark:text-white font-semibold";

  // Mantém o padrão atual: destaca p1 no 1º parágrafo e p2 no 2º (sem hardcode de texto)
  const renderParagraph = (text: string, highlight?: string) => {
    if (!highlight) return text;

    const idx = text.indexOf(highlight);
    if (idx === -1) return text;

    const before = text.slice(0, idx);
    const after = text.slice(idx + highlight.length);

    return (
      <>
        {before}
        <span className={highlightClass}>{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <section
      id={about.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Media */}
          <div className="relative group">
            {/* Glow (decorativo) */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl transition-all duration-500 group-hover:bg-accent/20 motion-reduce:transition-none"
            />

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <img
                src={about.image.src}
                alt={about.image.alt}
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {/* Credential/Highlight (conteúdo) */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-xl">
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-1">
                  {about.cref.label}
                </p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  {about.cref.value}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id={sectionTitleId}
              className="text-4xl md:text-5xl font-black font-oswald uppercase mb-8 leading-tight text-slate-900 dark:text-white"
            >
              {about.titleLine1} <br />
              <span className="text-accent">{about.titleLine2}</span>
            </h2>

            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {about.paragraphs.map((text, index) => {
                const highlight =
                  index === 0 ? about.highlights.p1 : index === 1 ? about.highlights.p2 : undefined;

                return <p key={text}>{renderParagraph(text, highlight)}</p>;
              })}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {about.stats.map((item) => (
                <div key={item.label} className={cardBase}>
                  <div className="text-3xl font-black font-oswald text-accent mb-2">
                    {item.value}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
