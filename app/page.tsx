import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Plans from "@/components/Plans/Plans";
import Coaching from "@/components/Coaching/Coaching";
import Features from "@/components/Features/Features";
import PaymentOptions from "@/components/PaymentOptions/PaymentOptions";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Plans />
      <Coaching />
      <Features />
      <PaymentOptions />
      <Testimonials />
      <Contact />
    </>
  );
}
