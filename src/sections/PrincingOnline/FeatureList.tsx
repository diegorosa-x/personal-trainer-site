import React from "react";
import { CheckIcon } from "./Icons";

type Props = {
  features: readonly string[];
};

export const FeatureList: React.FC<Props> = ({ features }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-4 mb-12" role="list">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center"
          >
            <CheckIcon className="w-3 h-3 text-accent" />
          </span>
          <span className="text-slate-600 dark:text-slate-300 text-sm">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
};
