export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

export const buildPlanWhatsappHref = (
  whatsappFn: (text: string) => string,
  textPrefix: string,
  planName: string
) => whatsappFn(`${textPrefix} ${planName}.`);
