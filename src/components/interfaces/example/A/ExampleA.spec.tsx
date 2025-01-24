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

const VARIANTS = ["solid", "outline", "ghost"] as const;
const COLORS = ["rose", "emerald"] as const;
const SIZES = ["sm", "md", "lg"] as const;

type TVariant = (typeof VARIANTS)[number];
type TColor = (typeof COLORS)[number];
type TSize = (typeof SIZES)[number];

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

  [true, false].forEach((disabled) => {
    it(`Should ${!disabled ? "can" : "cannot"} interact when the button is ${!disabled ? "enabled" : "disabled"}`, () => {
      const onClickFn = jest.fn();
      const { getByTestId } = render(component({ disabled, onClickFn }));
      fireEvent.click(getByTestId("example-a"));
      if (!disabled) {
        expect(onClickFn).toHaveBeenCalled();
      } else {
        expect(onClickFn).not.toHaveBeenCalled();
      }
    });
  });

  VARIANTS.forEach((variant) => {
    COLORS.forEach((color) => {
      SIZES.forEach((size) => {
        SIZES.forEach((ghostSize) => {
          [true, false].forEach((disabled) => {
            it(`Should have Variant: ${variant}, Color: ${color}, ${size === "lg" && variant !== "ghost" ? "Size: " + size : " Ghost Size: " + ghostSize} correctly`, () => {
              const { getByTestId } = render(component({ color, disabled, size, variant }));

              // ⭐ === DEFAULT === ⭐
              expect(getByTestId("example-a")).toHaveClass(classes.default);

              // ⭐ === BASE === ⭐
              if (variant !== "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.base.a);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.base.a);
              }

              if (!disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.base.b);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.base.b);
              }

              if (disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.base.c);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.base.c);
              }

              // ⭐ === SOLID === ⭐
              if (variant === "solid" && color === "rose" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.solid.rose);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.solid.rose);
              }

              if (variant === "solid" && color === "emerald" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.solid.emerald);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.solid.emerald);
              }

              if (variant === "solid" && disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.solid.disabled);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.solid.disabled);
              }

              // ⭐ === OUTLINE === ⭐
              if (variant === "outline" && color === "rose" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.outline.rose);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.outline.rose);
              }

              if (variant === "outline" && color === "emerald" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.outline.emerald);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.outline.emerald);
              }

              if (variant === "outline" && disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.outline.disabled);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.outline.disabled);
              }

              // ⭐ === GHOST === ⭐
              if (variant === "ghost" && color === "rose" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.ghost.rose);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.ghost.rose);
              }

              if (variant === "ghost" && color === "emerald" && !disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.ghost.emerald);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.ghost.emerald);
              }

              if (variant === "ghost" && disabled) {
                expect(getByTestId("example-a")).toHaveClass(classes.ghost.disabled);
              }

              // ⭐ === SIZE === ⭐
              if (size === "sm" && variant !== "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.size.sm);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.size.sm);
              }

              if (size === "md" && variant !== "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.size.md);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.size.md);
              }

              if (size === "lg" && variant !== "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.size.lg);
              } else {
                expect(getByTestId("example-a")).not.toHaveClass(classes.size.lg);
              }

              // ⭐ === GHOST SIZE === ⭐
              if (size === "sm" && variant === "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.sm);
              }

              if (size === "md" && variant === "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.md);
              }

              if (size === "lg" && variant === "ghost") {
                expect(getByTestId("example-a")).toHaveClass(classes.ghostSize.lg);
              }
            });
          });
        });
      });
    });
  });
});
