import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes, ReactElement, ReactNode } from "react";

import { twm } from "@/src/libs";

import { ExampleA } from "../../A";
import { ExampleErrorMessage, ExampleInputsContainer, ExampleLabel, IExampleLabel } from "../elements";

interface I
  extends DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "color">, HTMLInputElement>,
    Omit<IExampleLabel, "children" | "className"> {
  className?: {
    container?: string;
    input?: string;
  } & IExampleLabel["className"];
  icon?: ReactNode;
  iconOnClick?: () => void;
}

const ExampleInputTWM = ({ className, disabled }: Omit<I, "color" | "label">) =>
  twm("w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed", disabled && "text-gray-400", className?.input);

export const ExampleInput: FC<I> = forwardRef<HTMLInputElement, I>(
  ({ className, color, disabled, errorMessage, icon, iconOnClick, label, ...props }, ref): ReactElement => (
    <ExampleInputsContainer className={className?.container}>
      <ExampleLabel
        className={{ fieldset: className?.fieldset, legend: className?.legend }}
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        label={label}
      >
        <input className={ExampleInputTWM({ className, disabled })} data-testid="example-input" disabled={disabled} ref={ref} {...props} />

        {icon && (
          <ExampleA
            className={`mx-1 ${!disabled && "text-inherit"} ${errorMessage ? "hover:text-red-600 active:text-red-700" : ""}`}
            color={"blue"}
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
