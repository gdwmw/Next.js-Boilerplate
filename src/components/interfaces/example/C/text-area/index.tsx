import { DetailedHTMLProps, FC, forwardRef, ReactElement, TextareaHTMLAttributes } from "react";

import { twm } from "@/src/libs";

import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel } from "../elements";

/* eslint-disable perfectionist/sort-union-types */
interface I extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  className?: string;
  color?: "rose" | "emerald";
  containerClassName?: string;
  disabled?: boolean;
  errorMessage?: string;
  fieldsetClassName?: string;
  label?: string;
  legendClassName?: string;
  rows?: number;
}
/* eslint-enable perfectionist/sort-union-types */

const ExampleTextAreaTWM = ({ className, disabled }: I) =>
  twm(
    "max-h-[200px] min-h-[120px] w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled && "text-gray-400",
    className,
  );

export const ExampleTextArea: FC<I> = forwardRef<HTMLTextAreaElement, I>(
  (
    { className, color, containerClassName, disabled, errorMessage, fieldsetClassName, label, legendClassName, rows, ...props },
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
