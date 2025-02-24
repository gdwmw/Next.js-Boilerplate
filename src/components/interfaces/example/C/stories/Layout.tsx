import { FC, ReactElement, ReactNode } from "react";

import { ExampleInput, ExampleSelect, ExampleTextArea } from "..";

interface I {
  color?: "emerald" | "rose";
  componentType: "input" | "select" | "textarea";
  disabled?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  label?: string;
  type?: string;
}

const Layout: FC<I> = (props): null | ReactElement => {
  switch (props.componentType) {
    case "input":
      return (
        <div className="w-60">
          <ExampleInput
            color={props.color}
            disabled={props.disabled}
            errorMessage={props.errorMessage}
            icon={props.icon}
            label={props.label}
            type={props.type}
          />
        </div>
      );
    case "select":
      return (
        <div className="w-60">
          <ExampleSelect color={props.color} disabled={props.disabled} errorMessage={props.errorMessage} label={props.label}>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </ExampleSelect>
        </div>
      );
    case "textarea":
      return (
        <div className="w-60">
          <ExampleTextArea color={props.color} disabled={props.disabled} errorMessage={props.errorMessage} label={props.label} />
        </div>
      );

    default:
      return null;
  }
};

export default Layout;
