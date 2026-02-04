import React from "react";
import { COPY } from "../data/constants";
import { CreditCard, Wallet, QrCode } from "lucide-react";

type PaymentIconType = "pix" | "card" | "cash";

const iconMap: Record<PaymentIconType, React.ElementType> = {
  pix: QrCode,
  card: CreditCard,
  cash: Wallet,
};

const PaymentMethods: React.FC = () => {
  const { paymentMethods } = COPY;

  return (
    <section id={paymentMethods.sectionId} className="py-24 bg-white dark:bg-slate-900/30 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black font-oswald uppercase mb-4 text-slate-900 dark:text-white">
            {paymentMethods.titlePrefix}{" "}
            <span className="text-accent">
              {paymentMethods.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 font-medium uppercase text-xs tracking-widest">
            {paymentMethods.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paymentMethods.methods.map((method, idx) => {
            const Icon = iconMap[method.icon.type];

            return (
              <div
                key={idx}
                className="reveal p-10 rounded-3xl border text-center space-y-4 transition-all
                  bg-slate-50 dark:bg-slate-900
                  border-slate-200 dark:border-slate-800
                  hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5
                  transform hover:-translate-y-2"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center">
                  <Icon size={40} className="text-accent" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {method.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-widest">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
