import { DetailedHTMLProps, FC, forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
interface I extends DetailedHTMLProps<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">, HTMLTextAreaElement> {
  className?: {
    container?: string;
    fieldset?: string;
    legend?: string;
    textarea?: string;
  };
  color?: "rose" | "emerald";
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  rows?: number;
}
/* eslint-enable perfectionist/sort-union-types */

const ExampleTextAreaTWM = ({ className, disabled }: I) =>
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
