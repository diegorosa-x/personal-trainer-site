import React from "react";
import { COPY } from "../../data/constants.ts";
import { useReducedMotion, Variants } from "framer-motion";
import AboutMedia from "./AboutMedia";
import AboutContent from "./AboutContent";

const About: React.FC = () => {
  const { about } = COPY;
  const reduceMotion = useReducedMotion();

  const sectionTitleId = "about-title";

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  return (
    <section
      id={about.sectionId}
      aria-labelledby={sectionTitleId}
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AboutMedia
            about={about}
            reduceMotion={Boolean(reduceMotion)}
            fadeUp={fadeUp}
          />
          <AboutContent
            about={about}
            sectionTitleId={sectionTitleId}
            reduceMotion={Boolean(reduceMotion)}
            fadeUp={fadeUp}
            stagger={stagger}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
