import { FC, PropsWithChildren, ReactElement } from "react";
import { MdError } from "react-icons/md";

import { twm } from "@/src/libs";
import { TExampleCColor } from "@/src/types";

export interface IExampleLabel extends Readonly<PropsWithChildren> {
  className?: {
    fieldset?: string;
    legend?: string;
  };
  color: TExampleCColor;
  disabled?: boolean;
  errorMessage?: string;
  label: string;
}

const FieldsetTWM = ({ className, color, disabled, errorMessage }: Omit<IExampleLabel, "label">) => {
  const isActive = !disabled && !errorMessage;
  const isError = errorMessage && !disabled;

  return twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    disabled ? "border-gray-400" : "border-black dark:border-white",
    isActive && color === "rose" && "focus-within:border-rose-400",
    isActive && color === "emerald" && "focus-within:border-emerald-400",
    isError && "focus-within:border-red-600",
    className?.fieldset,
  );
};

const LegendTWM = ({ className, color, disabled, errorMessage }: Omit<IExampleLabel, "label">) => {
  const isActive = !disabled && !errorMessage;
  const isError = errorMessage && !disabled;

  return twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    disabled ? "text-gray-400" : "dark:text-white",
    isActive && color === "rose" && "group-focus-within:text-rose-400",
    isActive && color === "emerald" && "group-focus-within:text-emerald-400",
    isError && "group-focus-within:text-red-600",
    className?.legend,
  );
};

export const ExampleLabel: FC<IExampleLabel> = ({ className, color, disabled, errorMessage, label, ...props }): ReactElement => (
  <fieldset className={FieldsetTWM({ className, color, disabled, errorMessage })} data-testid="example-label-fieldset">
    <legend className={LegendTWM({ className, color, disabled, errorMessage })} data-testid="example-label-legend">
      {label}
      {errorMessage && !disabled && <MdError className="text-red-600" data-testid="example-label-icon" />}
    </legend>

    <div className="flex items-center justify-center">{props.children}</div>
  </fieldset>
);
