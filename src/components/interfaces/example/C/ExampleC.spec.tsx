import { render } from "@testing-library/react";
import { InputHTMLAttributes, ReactNode } from "react";
import { FaEye } from "react-icons/fa";

import { ExampleInput, ExampleSelect, ExampleTextArea } from "@/src/components/interfaces/example/C";

/* eslint-disable perfectionist/sort-objects */
const classes = {
  label: {
    fieldset: {
      default: "group overflow-hidden rounded-md border-2 px-1 pb-2",
      rose: "border-black focus-within:border-rose-400",
      emerald: "border-black focus-within:border-emerald-400",
      error: "border-black focus-within:border-red-600",
      disabled: "border-gray-400",
    },
    legend: {
      default: "ml-3 flex select-none items-center gap-1 whitespace-nowrap px-1 text-xs font-semibold",
      rose: "group-focus-within:text-rose-400",
      emerald: "group-focus-within:text-emerald-400",
      error: "group-focus-within:text-red-600",
      disabled: "text-gray-400",
    },
  },
  input: {
    default: "w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled: "text-gray-400",
  },
  select: {
    default: "w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled: "text-gray-400",
  },
  textarea: {
    default: "max-h-[200px] min-h-[120px] w-full rounded-sm bg-transparent px-1 outline-none disabled:cursor-not-allowed",
    disabled: "text-gray-400",
  },
};
/* eslint-enable perfectionist/sort-objects */

const COLORS = ["rose", "emerald"] as const;

type TColor = (typeof COLORS)[number];

interface I {
  color: TColor;
  defaultValue?: string;
  disabled?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const inputComponent = ({ color, defaultValue, disabled, errorMessage, icon, type }: I) => (
  <ExampleInput color={color} defaultValue={defaultValue} disabled={disabled} errorMessage={errorMessage} icon={icon} label="Example" type={type} />
);

const selectComponent = ({ color, defaultValue, disabled, errorMessage }: I) => (
  <ExampleSelect color={color} defaultValue={defaultValue} disabled={disabled} errorMessage={errorMessage} label="Example">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </ExampleSelect>
);

const textareaComponent = ({ color, defaultValue, disabled, errorMessage }: I) => (
  <ExampleTextArea color={color} defaultValue={defaultValue} disabled={disabled} errorMessage={errorMessage} label="Example" />
);

describe("ExampleC Component Testing", () => {
  describe("Input Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(inputComponent({ color: "rose", type: "text" }));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(inputComponent({ color: "rose", defaultValue: "Example", type: "text" }));
      expect(getByTestId("example-input")).toHaveValue("Example");
    });

    it("Should have an icon", () => {
      const { getByTestId } = render(
        inputComponent({ color: "rose", defaultValue: "Example", icon: <FaEye data-testid="example-input-icon" />, type: "password" }),
      );
      expect(getByTestId("example-input-icon")).toBeDefined();
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(inputComponent({ color: "rose", type: "text" }));
      expect(getByTestId("example-input")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(inputComponent({ color: "rose", disabled: true, type: "text" }));
      expect(getByTestId("example-input")).toBeDisabled();
    });

    it("Should have an error icon, error message and correct classes", () => {
      const { getByTestId } = render(inputComponent({ color: "rose", errorMessage: "Example", type: "text" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
      expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.error);
      expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.rose);
      expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.emerald);
      expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.error);
      expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.rose);
      expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.emerald);
    });

    describe("Input Classes Testing", () => {
      COLORS.forEach((color) => {
        [true, false].forEach((disabled) => {
          it(`Should have correct classes for Input with color: ${color}, disabled: ${disabled}`, () => {
            const { getByTestId } = render(inputComponent({ color, disabled, type: "text" }));

            expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.default);
            expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.default);
            expect(getByTestId("example-input")).toHaveClass(classes.input.default);

            // ⭐ === LABEL FIELDSET === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.rose);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.emerald);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.disabled);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.disabled);
            }

            // ⭐ === LABEL LEGEND === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.rose);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.emerald);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.disabled);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.disabled);
            }

            // ⭐ === INPUT === ⭐
            if (disabled) {
              expect(getByTestId("example-input")).toHaveClass(classes.input.disabled);
            } else {
              expect(getByTestId("example-input")).not.toHaveClass(classes.input.disabled);
            }
          });
        });
      });
    });
  });

  describe("Select Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(selectComponent({ color: "rose" }));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(selectComponent({ color: "rose", defaultValue: "1" }));
      expect(getByTestId("example-select")).toHaveValue("1");
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(selectComponent({ color: "rose" }));
      expect(getByTestId("example-select")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(selectComponent({ color: "rose", disabled: true }));
      expect(getByTestId("example-select")).toBeDisabled();
    });

    it("Should have an error icon and error message", () => {
      const { getByTestId } = render(selectComponent({ color: "rose", errorMessage: "Example" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
    });

    describe("Select Classes Testing", () => {
      COLORS.forEach((color) => {
        [true, false].forEach((disabled) => {
          it(`Should have correct classes for Select with color: ${color}, disabled: ${disabled}`, () => {
            const { getByTestId } = render(selectComponent({ color, disabled }));

            expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.default);
            expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.default);
            expect(getByTestId("example-select")).toHaveClass(classes.select.default);

            // ⭐ === LABEL FIELDSET === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.rose);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.emerald);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.disabled);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.disabled);
            }

            // ⭐ === LABEL LEGEND === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.rose);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.emerald);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.disabled);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.disabled);
            }

            // ⭐ === SELECT === ⭐
            if (disabled) {
              expect(getByTestId("example-select")).toHaveClass(classes.select.disabled);
            } else {
              expect(getByTestId("example-select")).not.toHaveClass(classes.select.disabled);
            }
          });
        });
      });
    });
  });

  describe("Textarea Testing", () => {
    it("Should have label", () => {
      const { getByTestId } = render(textareaComponent({ color: "rose" }));
      expect(getByTestId("example-label-legend")).toHaveTextContent("Example");
    });

    it("Should have the correct value", () => {
      const { getByTestId } = render(textareaComponent({ color: "rose", defaultValue: "Example Text" }));
      expect(getByTestId("example-textarea")).toHaveValue("Example Text");
    });

    it("Should be enabled", () => {
      const { getByTestId } = render(textareaComponent({ color: "rose" }));
      expect(getByTestId("example-textarea")).toBeEnabled();
    });

    it("Should be disabled", () => {
      const { getByTestId } = render(textareaComponent({ color: "rose", disabled: true }));
      expect(getByTestId("example-textarea")).toBeDisabled();
    });

    it("Should have an error icon and error message", () => {
      const { getByTestId } = render(textareaComponent({ color: "rose", errorMessage: "Example" }));
      expect(getByTestId("example-label-icon")).toBeDefined();
      expect(getByTestId("example-error-message")).toBeDefined();
      expect(getByTestId("example-error-message")).toHaveTextContent("Example");
    });

    describe("Textarea Classes Testing", () => {
      COLORS.forEach((color) => {
        [true, false].forEach((disabled) => {
          it(`Should have correct classes for Textarea with color: ${color}, disabled: ${disabled}`, () => {
            const { getByTestId } = render(textareaComponent({ color, disabled }));

            expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.default);
            expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.default);
            expect(getByTestId("example-textarea")).toHaveClass(classes.textarea.default);

            // ⭐ === LABEL FIELDSET === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.rose);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.emerald);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-fieldset")).toHaveClass(classes.label.fieldset.disabled);
            } else {
              expect(getByTestId("example-label-fieldset")).not.toHaveClass(classes.label.fieldset.disabled);
            }

            // ⭐ === LABEL LEGEND === ⭐
            if (color === "rose" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.rose);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.rose);
            }

            if (color === "emerald" && !disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.emerald);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.emerald);
            }

            if (disabled) {
              expect(getByTestId("example-label-legend")).toHaveClass(classes.label.legend.disabled);
            } else {
              expect(getByTestId("example-label-legend")).not.toHaveClass(classes.label.legend.disabled);
            }

            // ⭐ === TEXTAREA === ⭐
            if (disabled) {
              expect(getByTestId("example-textarea")).toHaveClass(classes.textarea.disabled);
            } else {
              expect(getByTestId("example-textarea")).not.toHaveClass(classes.textarea.disabled);
            }
          });
        });
      });
    });
  });
});
