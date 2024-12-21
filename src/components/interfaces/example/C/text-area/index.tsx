import { DetailedHTMLProps, FC, forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import { twm } from "@/src/libs/tailwind-merge";

import { ErrorMessage, InputsContainer, Label } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
type TExampleTextArea = {
  className?: string;
  color?: "rose" | "emerald";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
  rows?: number;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
/* eslint-enable perfectionist/sort-union-types */

const ExampleTextAreaTWM = ({ className, disabled }: TExampleTextArea) =>
  twm(
    "max-h-[200px] min-h-[120px] w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled && "text-gray-400",
    className,
  );

export const ExampleTextArea: FC<TExampleTextArea> = forwardRef<HTMLTextAreaElement, TExampleTextArea>(
  (
    { className, color, containerClassName, disabled, errorMessage, fieldsetClassName, label, legendClassName, rows, ...props },
    ref,
  ): ReactElement => (
    <InputsContainer className={containerClassName}>
      <Label
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        fieldsetClassName={fieldsetClassName}
        label={label}
        legendClassName={legendClassName}
      >
        <textarea
          className={ExampleTextAreaTWM({ className, disabled })}
          data-testid="example-textarea"
          disabled={disabled}
          ref={ref}
          rows={rows ?? 5}
          {...props}
        />
      </Label>

      {errorMessage && !disabled && <ErrorMessage errorMessage={errorMessage} />}
    </InputsContainer>
  ),
);

ExampleTextArea.displayName = "ExampleTextArea";
