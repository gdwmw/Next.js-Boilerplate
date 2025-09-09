import { DetailedHTMLProps, FC, forwardRef, ReactElement, SelectHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel, IExampleLabel } from "../elements";

interface I
  extends DetailedHTMLProps<Omit<SelectHTMLAttributes<HTMLSelectElement>, "className" | "color">, HTMLSelectElement>,
    Omit<IExampleLabel, "children" | "className"> {
  className?: {
    container?: string;
    select?: string;
  } & IExampleLabel["className"];
}

const ExampleSelectTWM = ({ className, disabled }: Omit<I, "color" | "label">) =>
  twm(
    "h-[24px] w-full cursor-pointer rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled && "text-gray-400",
    className?.select,
  );

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
