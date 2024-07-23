"use client";

import { FC, ReactElement } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel, IExampleLabel } from "../elements";

import "@/src/styles/datepicker.css";

interface I extends Omit<DatePickerProps, "className">, Omit<IExampleLabel, "children" | "className"> {
  className?: {
    container?: string;
    datepicker?: string;
  } & IExampleLabel["className"];
}

const ExampleDatePickerTWM = ({ className, disabled }: Omit<I, "color" | "label">) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className?.datepicker);

export const ExampleDatePicker: FC<I> = ({ className, color, disabled, errorMessage, label, ...props }): ReactElement => (
  <ExampleInputsContainer className={className?.container}>
    <ExampleLabel
      className={{ fieldset: className?.fieldset, legend: className?.legend }}
      color={color}
      disabled={disabled}
      errorMessage={errorMessage}
      label={label}
    >
      <DatePicker className={ExampleDatePickerTWM({ className, disabled })} disabled={disabled} {...(props as DatePickerProps)} />
    </ExampleLabel>

    {errorMessage && !disabled && <ExampleErrorMessage errorMessage={errorMessage} />}
  </ExampleInputsContainer>
);

ExampleDatePicker.displayName = "ExampleDatePicker";
