import { fireEvent, render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { ExampleA, IExampleA } from ".";

/* eslint-disable tailwindcss/no-custom-classname */

const component = (props: { onClickFn?: () => void } & Partial<IExampleA>) => (
  <ExampleA
    className="testing-class"
    color={props.color ?? "blue"}
    disabled={props.disabled}
    id="testing-id"
    onClick={props.onClickFn}
    size={props.size ?? "sm"}
    style={{ color: "#ff0000" }}
    type="button"
    variant={props.variant ?? "solid"}
  >
    <FaCrown data-testid="testing-icon" />
    This is testing text
  </ExampleA>
);

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
      expect(onClickFn).toHaveBeenCalledTimes(disabled ? 0 : 1);
    });
  });
});
