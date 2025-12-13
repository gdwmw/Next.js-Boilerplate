import { FC, ReactElement, ReactNode } from "react";

import { TExampleCColor } from "@/src/types";

import { ExampleDatePicker } from "../datepicker";
import { ExampleInput } from "../input";
import { ExampleSelect } from "../select";
import { ExampleTextArea } from "../text-area";

interface I {
  color: TExampleCColor;
  componentType: "datepicker" | "input" | "select" | "textarea";
  disabled?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  iconOnClick: () => void;
  label: string;
  type?: string;
}

const StoriesLayout: FC<I> = (props): null | ReactElement => {
  switch (props.componentType) {
    case "datepicker":
      return (
        <div className="w-60">
          <ExampleDatePicker color={props.color} disabled={props.disabled} errorMessage={props.errorMessage} label={props.label} />
        </div>
      );
    case "input":
      return (
        <div className="w-60">
          <ExampleInput
            color={props.color}
            disabled={props.disabled}
            errorMessage={props.errorMessage}
            icon={props.icon}
            iconOnClick={props.iconOnClick}
            label={props.label}
            type={props.type}
          />
        </div>
      );
    case "select":
      return (
        <div className="w-60">
          <ExampleSelect color={props.color} disabled={props.disabled} errorMessage={props.errorMessage} label={props.label}>
            <option className="hidden" value="-">
              -
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
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

export default StoriesLayout;
