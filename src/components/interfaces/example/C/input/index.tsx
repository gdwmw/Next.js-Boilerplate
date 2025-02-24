"use client";

import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs";

import { ExampleA } from "../../A";
import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
interface I extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  color?: "rose" | "emerald";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  icon?: ReactNode;
  iconOnClick?: () => void;
  label?: string;
  legendClassName?: string;
}
/* eslint-enable perfectionist/sort-union-types */

const ExampleInputTWM = ({ className, disabled }: I) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

export const ExampleInput: FC<I> = forwardRef<HTMLInputElement, I>(
  (
    { className, color, containerClassName, disabled, errorMessage, fieldsetClassName, icon, iconOnClick, label, legendClassName, ...props },
    ref,
  ): ReactElement => (
    <ExampleInputsContainer className={containerClassName}>
      <ExampleLabel
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        fieldsetClassName={fieldsetClassName}
        label={label}
        legendClassName={legendClassName}
      >
        <input className={ExampleInputTWM({ className, disabled })} data-testid="example-input" disabled={disabled} ref={ref} {...props} />

        {icon && (
          <ExampleA
            className={`pr-1 ${!disabled && "text-inherit"} ${errorMessage ? "hover:text-red-600 active:text-red-700" : ""}`}
            color={color}
            disabled={disabled}
            onClick={iconOnClick}
            size="sm"
            type="button"
            variant="ghost"
          >
            {icon}
          </ExampleA>
        )}
      </ExampleLabel>

      {errorMessage && !disabled && <ExampleErrorMessage errorMessage={errorMessage} />}
    </ExampleInputsContainer>
  ),
);

ExampleInput.displayName = "ExampleInput";
