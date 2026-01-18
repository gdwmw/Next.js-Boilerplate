import { render } from "@testing-library/react";
import { InputHTMLAttributes, ReactNode } from "react";
import { FaEye } from "react-icons/fa";

import { TExampleCColor } from "@/src/types";

import { ExampleInput, ExampleSelect, ExampleTextArea } from ".";

interface I {
  color?: TExampleCColor;
  defaultValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const inputComponent = (props: I) => (
  <ExampleInput
    color={props.color ?? "default"}
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    errorMessage={props.errorMessage}
    icon={props.icon}
    label="Example"
    type={props.type}
  />
);

const selectComponent = (props: I) => (
  <ExampleSelect
    color={props.color ?? "default"}
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    errorMessage={props.errorMessage}
    label="Example"
  >
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </ExampleSelect>
);

const textareaComponent = (props: I) => (
  <ExampleTextArea
    color={props.color ?? "default"}
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    errorMessage={props.errorMessage}
    label="Example"
  />
);

describe("ExampleC Component Testing", () => {
  describe("Input Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(inputComponent({ type: "text" }));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(inputComponent({ defaultValue: "Example", type: "text" }));
      expect(getByTestId("example-input")).toHaveValue("Example");
    });

    it("Should have an icon", () => {
      const { getByTestId } = render(inputComponent({ defaultValue: "Example", icon: <FaEye data-testid="example-input-icon" />, type: "password" }));
      expect(getByTestId("example-input-icon")).toBeDefined();
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(inputComponent({ type: "text" }));
      expect(getByTestId("example-input")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(inputComponent({ disabled: true, type: "text" }));
      expect(getByTestId("example-input")).toBeDisabled();
    });

    it("Should have an error icon and error message", () => {
      const { getByTestId } = render(inputComponent({ errorMessage: "Example", type: "text" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
    });
  });

  describe("Select Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(selectComponent({}));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(selectComponent({ defaultValue: "1" }));
      expect(getByTestId("example-select")).toHaveValue("1");
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(selectComponent({}));
      expect(getByTestId("example-select")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(selectComponent({ disabled: true }));
      expect(getByTestId("example-select")).toBeDisabled();
    });

    it("Should have an error icon and error message", () => {
      const { getByTestId } = render(selectComponent({ errorMessage: "Example" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
    });
  });

  describe("Textarea Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(textareaComponent({}));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(textareaComponent({ defaultValue: "Example Text" }));
      expect(getByTestId("example-textarea")).toHaveValue("Example Text");
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(textareaComponent({}));
      expect(getByTestId("example-textarea")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(textareaComponent({ disabled: true }));
      expect(getByTestId("example-textarea")).toBeDisabled();
    });

    it("Should have an error icon and error message", () => {
      const { getByTestId } = render(textareaComponent({ errorMessage: "Example" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
    });
  });
});
