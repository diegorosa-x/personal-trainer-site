import PlanCard from "./PlanCard";

const plans = [
  { title: "Plano Bronze", sessions: "2x por semana", price: "R$ ??,99" },
  { title: "Plano Prata", sessions: "3x por semana", price: "R$ ??,99" },
  { title: "Plano Ouro", sessions: "4x por semana", price: "R$ ??,99" },
  { title: "Plano Plus", sessions: "5x por semana", price: "R$ ??,99" },
];

export default function Plans() {
  return (
    <section id="plans" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Planos de Treino
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}
