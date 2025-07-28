import { DetailedHTMLProps, FC, forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel, IExampleLabel } from "../elements";

interface I
  extends DetailedHTMLProps<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "color">, HTMLTextAreaElement>,
    Omit<IExampleLabel, "children" | "className"> {
  className?: {
    container?: string;
    textarea?: string;
  } & IExampleLabel["className"];
  rows?: number;
}

const ExampleTextAreaTWM = ({ className, disabled }: Omit<I, "color" | "label">) =>
  twm(
    "max-h-[200px] min-h-[120px] w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled && "text-gray-400",
    className?.textarea,
  );

export const ExampleTextArea: FC<I> = forwardRef<HTMLTextAreaElement, I>(
  ({ className, color, disabled, errorMessage, label, rows, ...props }, ref): ReactElement => (
    <ExampleInputsContainer className={className?.container}>
      <ExampleLabel
        className={{ fieldset: className?.fieldset, legend: className?.legend }}
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        label={label}
      >
        <textarea
          className={ExampleTextAreaTWM({ className, disabled })}
          data-testid="example-textarea"
          disabled={disabled}
          ref={ref}
          rows={rows ?? 5}
          {...props}
        />
      </ExampleLabel>

      {errorMessage && !disabled && <ExampleErrorMessage errorMessage={errorMessage} />}
    </ExampleInputsContainer>
  ),
);

ExampleTextArea.displayName = "ExampleTextArea";
