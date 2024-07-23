import { render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { ContainerExampleB, IconExampleB, TextExampleB } from "./";

/* eslint-disable tailwindcss/no-custom-classname */
const component = (
  <ContainerExampleB className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
    <IconExampleB className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
      <FaCrown data-testid="testing-icon" />
    </IconExampleB>
    <TextExampleB className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
      This is testing text
    </TextExampleB>
  </ContainerExampleB>
);
/* eslint-enable tailwindcss/no-custom-classname */

describe("ExampleB Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-example-b")).toHaveAttribute("id", "testing-id");
    expect(getByTestId("icon-example-b")).toHaveAttribute("id", "testing-id");
    expect(getByTestId("text-example-b")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("text-example-b")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-example-b")).toHaveClass("testing-class");
    expect(getByTestId("icon-example-b")).toHaveClass("testing-class");
    expect(getByTestId("text-example-b")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("container-example-b")).toHaveStyle("color: #ff0000");
    expect(getByTestId("icon-example-b")).toHaveStyle("color: #ff0000");
    expect(getByTestId("text-example-b")).toHaveStyle("color: #ff0000");
  });

  it("Should have an icon", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("testing-icon")).toBeInTheDocument();
  });
});
