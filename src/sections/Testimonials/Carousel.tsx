import React from "react";
import TestimonialCard from "./TestimonialCard";
import Dots from "./Dots";
import type { Testimonial } from "../../types";

type Props = {
  items: readonly Testimonial[];
  reduceMotion: boolean;
};

export default function Carousel({ items, reduceMotion }: Props) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(1);
  const [paused, setPaused] = React.useState(false);

  const ratingLabel = "Avaliação: 5 de 5";

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      if (w >= 1024) setPageSize(3);
      else if (w >= 768) setPageSize(2);
      else setPageSize(1);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const clamp = (n: number) => Math.max(0, Math.min(items.length - 1, n));

  const scrollToIndex = React.useCallback((idx: number, behavior: ScrollBehavior) => {
    const el = viewportRef.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>("[data-slide]");
    const target = children[idx];
    if (!target) return;

    el.scrollTo({ left: target.offsetLeft, behavior });
    setActiveIndex(idx);
  }, []);

  const goPrev = React.useCallback(() => {
    scrollToIndex(clamp(activeIndex - pageSize), "smooth");
  }, [activeIndex, pageSize, scrollToIndex]);

  const goNext = React.useCallback(() => {
    scrollToIndex(clamp(activeIndex + pageSize), "smooth");
  }, [activeIndex, pageSize, scrollToIndex]);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const children = el.querySelectorAll<HTMLElement>("[data-slide]");
        if (!children.length) return;

        const left = el.scrollLeft;
        let bestIdx = 0;
        let bestDist = Infinity;

        children.forEach((node, idx) => {
          const dist = Math.abs(node.offsetLeft - left);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });

        setActiveIndex(bestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  React.useEffect(() => {
    if (reduceMotion) return;
    if (paused) return;

    const id = window.setInterval(() => {
      const next =
        activeIndex + pageSize >= items.length ? 0 : activeIndex + pageSize;
      scrollToIndex(next, "smooth");
    }, 4500);

    return () => window.clearInterval(id);
  }, [activeIndex, items.length, pageSize, paused, reduceMotion, scrollToIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Carrossel de depoimentos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Depoimentos
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 backdrop-blur
                       text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-950 transition-colors
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Ver depoimento anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 backdrop-blur
                       text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-950 transition-colors
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Ver próximo depoimento"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="
          flex gap-6 overflow-x-auto pb-4
          scroll-smooth
          snap-x snap-mandatory
          [scrollbar-width:none] [-ms-overflow-style:none]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        "
        aria-describedby="carousel-help"
      >
        {/* esconder scrollbar webkit */}
        <style>{`
          .snap-x::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((t, idx) => (
          <TestimonialCard
            key={t.id}
            t={t}
            index={idx}
            total={items.length}
            reduceMotion={reduceMotion}
            ratingLabel={ratingLabel}
          />
        ))}
      </div>

      <p id="carousel-help" className="sr-only">
        Use as setas esquerda e direita para navegar pelos depoimentos.
      </p>

      <Dots
        count={items.length}
        activeIndex={activeIndex}
        onGoTo={(i) => scrollToIndex(i, "smooth")}
      />
    </div>
  );
}
