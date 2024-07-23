import { render } from "@testing-library/react";
import { FaCrown } from "react-icons/fa";

import { ExampleBContainer, ExampleBIcon, ExampleBText } from ".";

/* eslint-disable tailwindcss/no-custom-classname */

const component = (
  <ExampleBContainer className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
    <ExampleBIcon className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
      <FaCrown data-testid="testing-icon" />
    </ExampleBIcon>
    <ExampleBText className="testing-class" id="testing-id" style={{ color: "#ff0000" }}>
      This is testing text
    </ExampleBText>
  </ExampleBContainer>
);

describe("ExampleB Component Testing", () => {
  it("Should have a id", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-container")).toHaveAttribute("id", "testing-id");
    expect(getByTestId("example-b-icon")).toHaveAttribute("id", "testing-id");
    expect(getByTestId("example-b-text")).toHaveAttribute("id", "testing-id");
  });

  it("Should have text", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-text")).toHaveTextContent("This is testing text");
  });

  it("Should have a class name testing-class", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-container")).toHaveClass("testing-class");
    expect(getByTestId("example-b-icon")).toHaveClass("testing-class");
    expect(getByTestId("example-b-text")).toHaveClass("testing-class");
  });

  it("Should have a style attribute with value color: #ff0000", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("example-b-container")).toHaveStyle("color: #ff0000");
    expect(getByTestId("example-b-icon")).toHaveStyle("color: #ff0000");
    expect(getByTestId("example-b-text")).toHaveStyle("color: #ff0000");
  });

  it("Should have an icon", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("testing-icon")).toBeInTheDocument();
  });
});
