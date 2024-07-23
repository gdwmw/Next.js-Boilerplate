"use client";

import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
interface I extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  className?: string;
  color?: "rose" | "emerald";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
}
/* eslint-enable perfectionist/sort-union-types */

const ExampleSelectTWM = ({ className, disabled }: I) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className);

export const ExampleSelect: FC<I> = forwardRef<HTMLSelectElement, I>(
  ({ className, color, containerClassName, disabled, errorMessage, fieldsetClassName, label, legendClassName, ...props }, ref): ReactElement => (
    <ExampleInputsContainer className={containerClassName}>
      <ExampleLabel
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        fieldsetClassName={fieldsetClassName}
        label={label}
        legendClassName={legendClassName}
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
