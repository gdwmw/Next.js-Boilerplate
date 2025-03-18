"use client";

import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
interface I extends DetailedHTMLProps<Omit<SelectHTMLAttributes<HTMLSelectElement>, "className">, HTMLSelectElement> {
  className?: {
    container?: string;
    fieldset?: string;
    legend?: string;
    select?: string;
  };
  color?: "rose" | "emerald";
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
}
/* eslint-enable perfectionist/sort-union-types */

const ExampleSelectTWM = ({ className, disabled }: I) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className?.select);

export const ExampleSelect: FC<I> = forwardRef<HTMLSelectElement, I>(
  ({ className, color, disabled, errorMessage, label, ...props }, ref): ReactElement => (
    <ExampleInputsContainer className={className?.container}>
      <ExampleLabel
        className={{ fieldset: className?.fieldset, legend: className?.legend }}
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        label={label}
      >
        <select className={ExampleSelectTWM({ className, disabled })} data-testid="example-select" disabled={disabled} ref={ref} {...props}>
          {props.children}
        </select>
      </ExampleLabel>

      {errorMessage && !disabled && <ExampleErrorMessage errorMessage={errorMessage} />}
    </ExampleInputsContainer>
  ),
);

ExampleSelect.displayName = "ExampleSelect";
