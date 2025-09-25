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
    "group overflow-hidden rounded-md border px-1 pb-2 dark:text-white",
    isActive && color === "blue" && "focus-within:border-blue-500",
    isActive && color === "red" && "focus-within:border-red-500",
    isActive && color === "green" && "focus-within:border-green-500",
    isActive && color === "default" && "",
    isError && color !== "default" && "focus-within:border-red-600",
    disabled ? "border-gray-400" : "border-gray-300",
    className?.fieldset,
  );
};

const LegendTWM = ({ className, color, disabled, errorMessage }: Omit<IExampleLabel, "label">) => {
  const isActive = !disabled && !errorMessage;
  const isError = errorMessage && !disabled;

  return twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    isActive && color === "blue" && "group-focus-within:text-blue-500",
    isActive && color === "red" && "group-focus-within:text-red-500",
    isActive && color === "green" && "group-focus-within:text-green-500",
    isActive && color === "default" && "",
    isError && color !== "default" && "group-focus-within:text-red-600",
    disabled ? "text-gray-400" : "dark:text-white",
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
