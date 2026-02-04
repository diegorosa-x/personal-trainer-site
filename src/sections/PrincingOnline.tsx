import React from 'react';
import { COPY, WHATSAPP_LINK, ONLINE_FEATURES } from '../data/constants.ts';

const PricingOnline: React.FC = () => {
  const { pricingOnline } = COPY;

  const whatsappUrl = WHATSAPP_LINK.whatsapp(pricingOnline.whatsappText);

  return (
    <section id={pricingOnline.sectionId} className="py-24 bg-white dark:bg-slate-950 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="reveal bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase mb-6 tracking-tight text-slate-900 dark:text-white">
                {pricingOnline.titlePrefix}{' '}
                <span className="text-accent">{pricingOnline.titleHighlight}</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                {pricingOnline.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {ONLINE_FEATURES.map((feature, idx) => (
                  <div key={`${feature}-${idx}`} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400">R$</span>
                    <span className="text-5xl font-black font-oswald text-slate-900 dark:text-white">
                      {pricingOnline.price.value}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mt-1">
                    {pricingOnline.price.label}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-2xl font-black uppercase tracking-widest hover:bg-accent-hover transition-all shadow-xl shadow-accent/20 transform hover:scale-105 active:scale-95 text-center"
                >
                  {pricingOnline.cta}
                </a>
              </div>
            </div>

            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <img
                src={pricingOnline.image.src}
                alt={pricingOnline.image.alt}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-slate-900 via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent to-transparent lg:hidden"></div>

              <div className="absolute bottom-12 right-12 bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 p-6 rounded-2xl max-w-xs animate-pulse">
                <p className="text-accent font-black text-4xl mb-1">{pricingOnline.urgency.title}</p>
                <p className="text-slate-900 dark:text-white font-bold uppercase tracking-widest">
                  {pricingOnline.urgency.subtitle}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOnline;
