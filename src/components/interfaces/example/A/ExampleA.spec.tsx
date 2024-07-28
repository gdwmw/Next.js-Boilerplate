import { fireEvent, render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { ExampleA } from "./";

/* eslint-disable perfectionist/sort-objects */
const classes = {
  default: "flex items-center gap-2",
  base: {
    a: "justify-center rounded-full",
    b: "active:scale-95",
    c: "cursor-not-allowed",
  },
  solid: {
    rose: "bg-rose-400 text-white hover:bg-rose-500 hover:ring-1 hover:ring-rose-600 active:bg-rose-600",
    emerald: "bg-emerald-400 text-white hover:bg-emerald-500 hover:ring-1 hover:ring-emerald-600 active:bg-emerald-600",
    disabled: "bg-gray-400 text-white",
  },
  outline: {
    rose: "bg-transparent text-rose-400 ring-1 ring-rose-400 hover:bg-rose-500 hover:text-white hover:ring-rose-600 active:bg-rose-600",
    emerald:
      "bg-transparent text-emerald-400 ring-1 ring-emerald-400 hover:bg-emerald-500 hover:text-white hover:ring-emerald-600 active:bg-emerald-600",
    disabled: "bg-transparent text-gray-400 ring-1 ring-gray-400",
  },
  ghost: {
    rose: "text-rose-400 hover:text-rose-500 active:text-rose-600",
    emerald: "text-emerald-400 hover:text-emerald-500 active:text-emerald-600",
    disabled: "text-gray-400",
  },
  size: {
    sm: "h-10 min-w-28 px-3 text-base",
    md: "h-11 min-w-32 px-4 text-lg",
    lg: "h-12 min-w-36 px-5 text-xl",
  },
  ghostSize: {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  },
};
/* eslint-enable perfectionist/sort-objects */

/* eslint-disable perfectionist/sort-union-types */
type TVariant = "solid" | "outline" | "ghost";
type TColor = "rose" | "emerald";
type TSize = "sm" | "md" | "lg";
/* eslint-enable perfectionist/sort-union-types */

const variants: TVariant[] = ["solid", "outline", "ghost"];
const colors: TColor[] = ["rose", "emerald"];
const sizes: TSize[] = ["sm", "md", "lg"];
const ghostSizes: TSize[] = ["sm", "md", "lg"];
const disabled: boolean[] = [false, true];

interface I {
  color?: TColor;
  disabled?: boolean;
  onClickFn?: () => void;
  size?: TSize;
  variant?: TVariant;
}

/* eslint-disable tailwindcss/no-custom-classname */
const component = ({ color, disabled, onClickFn, size, variant }: I) => (
  <ExampleA
    className="testing-class"
    color={color}
    disabled={disabled}
    id="testing-id"
    onClick={onClickFn}
    size={size}
    style={{ color: "#ff0000" }}
    type="button"
    variant={variant}
  >
    <FaCrown data-testid="testing-icon" />
    This is testing text
  </ExampleA>
);
/* eslint-enable tailwindcss/no-custom-classname */

describe("ExampleA Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("example-a")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("example-a")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("example-a")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("example-a")).toHaveStyle("color: #ff0000");
  });

  it("Should have an icon", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("testing-icon")).toBeInTheDocument();
  });

  it("Should have a type", () => {
    const { getByTestId } = render(component({}));
    expect(getByTestId("example-a")).toHaveAttribute("type", "button");
  });

  disabled.forEach((disabled) => {
    it(`Should ${!disabled ? "can" : "cannot"} interact when the button is ${!disabled ? "enabled" : "disabled"}`, () => {
      const onClickFn = jest.fn();
      const { getByTestId } = render(component({ disabled, onClickFn }));
      fireEvent.click(getByTestId("example-a"));
      !disabled ? expect(onClickFn).toHaveBeenCalled() : expect(onClickFn).not.toHaveBeenCalled();
    });
  });

  variants.forEach((variant) => {
    colors.forEach((color) => {
      sizes.forEach((size) => {
        ghostSizes.forEach((ghostSize) => {
          disabled.forEach((disabled) => {
            it(`Should have Variant: ${variant}, Color: ${color}, ${size === "lg" && variant !== "ghost" ? "Size: " + size : " Ghost Size: " + ghostSize} correctly`, () => {
              const { getByTestId } = render(component({ color, disabled, size, variant }));

              // ⭐ === DEFAULT === ⭐
              expect(getByTestId("example-a")).toHaveClass(classes.default);

              // ⭐ === BASE === ⭐
              variant !== "ghost"
                ? expect(getByTestId("example-a")).toHaveClass(classes.base.a)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.base.a);

              !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.base.b)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.base.b);

              disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.base.c)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.base.c);

              // ⭐ === SOLID === ⭐
              variant === "solid" && color === "rose" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.solid.rose)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.solid.rose);

              variant === "solid" && color === "emerald" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.solid.emerald)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.solid.emerald);

              variant === "solid" && disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.solid.disabled)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.solid.disabled);

              // ⭐ === OUTLINE === ⭐
              variant === "outline" && color === "rose" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.outline.rose)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.outline.rose);

              variant === "outline" && color === "emerald" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.outline.emerald)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.outline.emerald);

              variant === "outline" && disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.outline.disabled)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.outline.disabled);

              // ⭐ === GHOST === ⭐
              variant === "ghost" && color === "rose" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.ghost.rose)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.ghost.rose);

              variant === "ghost" && color === "emerald" && !disabled
                ? expect(getByTestId("example-a")).toHaveClass(classes.ghost.emerald)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.ghost.emerald);

              variant === "ghost" && disabled && expect(getByTestId("example-a")).toHaveClass(classes.ghost.disabled);

              // ⭐ === SIZE === ⭐
              size === "sm" && variant !== "ghost"
                ? expect(getByTestId("example-a")).toHaveClass(classes.size.sm)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.size.sm);

              size === "md" && variant !== "ghost"
                ? expect(getByTestId("example-a")).toHaveClass(classes.size.md)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.size.md);

              size === "lg" && variant !== "ghost"
                ? expect(getByTestId("example-a")).toHaveClass(classes.size.lg)
                : expect(getByTestId("example-a")).not.toHaveClass(classes.size.lg);

              // ⭐ === GHOST SIZE === ⭐
              size === "sm" && variant === "ghost" && expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.sm);

              size === "md" && variant === "ghost" && expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.md);

              size === "lg" && variant === "ghost" && expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.lg);
            });
          });
        });
      });
    });
  });
});
