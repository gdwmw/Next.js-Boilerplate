import { FC, PropsWithChildren, ReactElement } from "react";
import { MdError } from "react-icons/md";

import { twm } from "@/src/libs";

/* eslint-disable perfectionist/sort-union-types */
interface I extends Readonly<PropsWithChildren> {
  color?: "rose" | "emerald";
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
}
/* eslint-enable perfectionist/sort-union-types */

const FieldsetTWM = ({ color, disabled, errorMessage, fieldsetClassName }: I) => {
  const isActive = !disabled && !errorMessage;
  const isError = errorMessage && !disabled;

  return twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    disabled ? "border-gray-400" : "border-black dark:border-white",
    isActive && color === "rose" && "focus-within:border-rose-400",
    isActive && color === "emerald" && "focus-within:border-emerald-400",
    isError && "focus-within:border-red-600",
    fieldsetClassName,
  );
};

const LegendTWM = ({ color, disabled, errorMessage, legendClassName }: I) => {
  const isActive = !disabled && !errorMessage;
  const isError = errorMessage && !disabled;

  return twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    disabled ? "text-gray-400" : "dark:text-white",
    isActive && color === "rose" && "group-focus-within:text-rose-400",
    isActive && color === "emerald" && "group-focus-within:text-emerald-400",
    isError && "group-focus-within:text-red-600",
    legendClassName,
  );
};

export const ExampleLabel: FC<I> = ({ color, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }): ReactElement => (
  <fieldset className={FieldsetTWM({ color, disabled, errorMessage, fieldsetClassName })} data-testid="example-label-fieldset">
    <legend className={LegendTWM({ color, disabled, errorMessage, legendClassName })} data-testid="example-label-legend">
      {label}
      {errorMessage && !disabled && <MdError className="text-red-600" data-testid="example-label-icon" />}
    </legend>

    <div className="flex items-center justify-center">{props.children}</div>
  </fieldset>
);
