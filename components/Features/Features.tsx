const features = [
  "Treino personalizado",
  "Feedback semanal",
  "Vídeos demonstrativos",
  "Suporte via WhatsApp",
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Itens Inclusos
      </h2>
      <ul className="max-w-xl mx-auto space-y-3">
        {features.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
