import { useEffect, useState } from "react";

import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import PricingInPerson from "./sections/PricingInPerson";
import PaymentMethods from "./sections/PaymentMethods";
import PricingOnline from "./sections/PrincingOnline";
import ContactSection from "./sections/ContactSection";
import Header from "./features/header/components/Header";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "light" ? "light" : "dark";
  });

  // aplica/remover classe "dark" no <html> e persiste
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // reveal animation (IntersectionObserver)
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden transition-colors duration-300">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Testimonials />
        <PricingInPerson />
        <PricingOnline />
        <PaymentMethods />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
