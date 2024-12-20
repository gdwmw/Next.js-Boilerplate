import { FC, PropsWithChildren, ReactElement } from "react";
import { MdError } from "react-icons/md";

import { twm } from "@/src/libs/tailwind-merge";

/* eslint-disable perfectionist/sort-union-types */
type T = {
  color?: "rose" | "emerald";
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
} & Readonly<PropsWithChildren>;
/* eslint-enable perfectionist/sort-union-types */

const FieldsetTWM = ({ color, disabled, fieldsetClassName }: T) =>
  twm(
    "group overflow-hidden rounded-md border-2 px-1 pb-2",
    color === "rose" && !disabled && "border-rose-600 text-rose-600 focus-within:border-rose-600 dark:border-black dark:text-black",
    color === "emerald" && !disabled && "border-emerald-600 text-emerald-600 focus-within:border-emerald-600 dark:border-white dark:text-white",
    disabled && "border-gray-400",
    fieldsetClassName,
  );

const LegendTWM = ({ color, disabled, legendClassName }: T) =>
  twm(
    "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
    color === "rose" && !disabled && "group-focus-within:text-rose-600",
    color === "emerald" && !disabled && "group-focus-within:text-emerald-600",
    disabled && "text-gray-400",
    legendClassName,
  );

export const Label: FC<T> = ({ color, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }): ReactElement => (
  <fieldset className={FieldsetTWM({ color, disabled, fieldsetClassName })} data-testid="example-label-fieldset">
    <legend className={LegendTWM({ color, disabled, legendClassName })} data-testid="example-label-legend">
      {label}
      {errorMessage && !disabled && <MdError className="text-red-600" data-testid="example-label-icon" />}
    </legend>

    <div className="flex items-center justify-center">{props.children}</div>
  </fieldset>
);
