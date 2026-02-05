import { SITE_COPY } from "../../../copy";

export default function Brand() {
  return (
    <a
      href="/"
      aria-label="Ir para a página inicial"
      title={SITE_COPY.trainerName}
      className="inline-flex items-center gap-3 rounded
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:focus-visible:ring-offset-slate-950"
    >
      <img
        src="/logo.jpeg"
        alt={`${SITE_COPY.trainerName} logo`}
        width={32}
        height={32}
        loading="eager"
        decoding="async"
        className="h-8 w-8 rounded-full object-cover"
      />
      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        {SITE_COPY.trainerName}
      </span>
    </a>
  );
}
