import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Cliente 1", text: "Melhorei demais meus resultados!" },
  { name: "Cliente 2", text: "Transformação real!" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Depoimentos
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
