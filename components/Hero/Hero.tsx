export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center py-20 px-6"
    >
      {/* Imagem ou avatar do personal — trocar depois */}
      <div className="w-40 h-40 bg-gray-700 rounded-full mb-6"></div>

      {/* Nome do personal */}
      <h1 className="text-4xl font-bold">Higor Freire</h1>

      {/* Descrição principal */}
      <p className="mt-4 max-w-xl">
        Sou personal trainer especializado em treinos de força, hipertrofia e
        emagrecimento. Meu foco é te orientar em uma jornada de resultados
        reais, com acompanhamento dedicado e treinos personalizados.
      </p>

      {/* Botão de contato */}
      <a
        href="https://wa.me/5511999999999"
        className="mt-6 bg-green-600 px-6 py-3 rounded-full font-semibold inline-block"
      >
        Contato no WhatsApp
      </a>
    </section>
  );
}
