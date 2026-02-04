import React from 'react';
import { COPY } from '../data/constants.ts';

const About: React.FC = () => {
  const { about } = COPY;

  return (
    <section id={about.sectionId} className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group reveal">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-xl">
                <p className="text-sm font-bold text-accent uppercase tracking-widest mb-1">{about.cref.label}</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{about.cref.value}</p>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase mb-8 leading-tight text-slate-900 dark:text-white">
              {about.titleLine1} <br />
              <span className="text-accent">{about.titleLine2}</span>
            </h2>

            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <p>
                Minha missão é guiar você em uma{' '}
                <span className="text-slate-900 dark:text-white font-semibold">{about.highlights.p1}</span>. Não é apenas sobre treinar, é sobre transformar seu estilo de vida e conquistar a melhor version do seu corpo.
              </p>
              <p>
                Com foco em{' '}
                <span className="text-slate-900 dark:text-white font-semibold">{about.highlights.p2}</span>, desenvolvo metodologias que unem ciência e prática para acelerar sua evolução de forma segura e sustentável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {about.stats.map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl"
                >
                  <div className="text-3xl font-black font-oswald text-accent mb-2">{item.value}</div>
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
