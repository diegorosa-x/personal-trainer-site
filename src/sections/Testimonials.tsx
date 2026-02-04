
import React from 'react';
import { TESTIMONIALS } from '../data/constants.ts';

const Testimonials: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase mb-4 tracking-tight text-slate-900 dark:text-white">
              Resultados de quem <span className="text-accent italic">Treina Sério</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Transformações reais de clientes que confiaram no método e alcançaram seus objetivos de força, estética e saúde.
            </p>
          </div>
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl hidden lg:block">
            <p className="text-accent font-bold text-sm uppercase tracking-widest">A prova de que funciona</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className="reveal bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[32px] hover:border-accent/30 transition-all duration-300 flex flex-col group shadow-sm hover:shadow-xl hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.photo} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-800 group-hover:border-accent transition-colors"
                />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{t.name}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-accent text-white px-2 py-0.5 rounded">
                    {t.resultType}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed flex-grow">
                "{t.text}"
              </p>
              <div className="flex gap-1 text-accent">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature
        
        <div className="reveal bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-[40px] p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-slate-900 dark:text-white">Relatos em Vídeo</h3>
            <p className="text-slate-500 dark:text-slate-400">Acompanhe a evolução de quem mudou de vida com nosso acompanhamento exclusivo.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video bg-slate-200 dark:bg-slate-900 rounded-3xl overflow-hidden relative group cursor-pointer border border-slate-300 dark:border-slate-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <svg className="w-20 h-20 text-accent opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <div className="absolute bottom-6 left-6 text-left">
                <p className="text-white font-bold text-xl">Assista o depoimento</p>
                <p className="text-accent text-sm font-bold uppercase tracking-widest">Prepare seu vídeo aqui</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Higienize seus depoimentos!</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Higor, para tornar seu site ainda mais poderoso, nos envie seus <span className="text-accent font-bold">vídeos, nomes e fotos reais</span> de clientes.</p>
                <button className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                  Atualizar Dados
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Testimonials;
