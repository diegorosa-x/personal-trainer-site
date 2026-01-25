const options = ["Dinheiro", "Cartão", "PIX"];

export default function PaymentOptions() {
  return (
    <section id="payment" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6">Formas de Pagamento</h2>
      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        {options.map((opt) => (
          <div
            key={opt}
            className="bg-blue-600 text-white py-3 rounded-lg font-medium"
          >
            {opt}
          </div>
        ))}
      </div>
    </section>
  );
}
