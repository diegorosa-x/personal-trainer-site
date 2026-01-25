import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center py-24 px-6 font-primary"
    >
      {/* Imagem do personal (placeholder) */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/images/hero/hero-photo.png"
          alt="Foto de Higor Freire"
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* Nome do personal */}
      <h1 className="text-5xl font-bold leading-tight text-white">
        Higor Freire
      </h1>

      {/* Descrição principal */}
      <p className="mt-4 max-w-2xl text-lg text-gray-200">
        Sou personal trainer especializado em treinos de força, hipertrofia e
        emagrecimento. Meu foco é te orientar em uma jornada de resultados
        reais, com acompanhamento dedicado e treinos personalizados.
      </p>

      {/* Botão de contato */}
      <a
        href="https://wa.me/5511999999999"
        className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition-colors text-white px-8 py-3 rounded-full font-semibold text-lg"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        Contato no WhatsApp
      </a>
    </section>
  );
}
