import type { Meta, StoryObj } from "@storybook/nextjs";

import { FaCrown } from "react-icons/fa";
import { fn } from "storybook/test";

import { EXAMPLEA_COLOR_OPTIONS, EXAMPLEA_SIZE_OPTIONS, EXAMPLEA_VARIANT_OPTIONS } from "@/src/libs";

import { ExampleA } from ".";

const meta: Meta<typeof ExampleA> = {
  args: { onClick: fn(() => alert("Clicked!")) },
  argTypes: {
    color: {
      control: { type: "radio" },
      options: EXAMPLEA_COLOR_OPTIONS,
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "radio" },
      options: EXAMPLEA_SIZE_OPTIONS,
    },
    variant: {
      control: { type: "radio" },
      options: EXAMPLEA_VARIANT_OPTIONS,
    },
  },
  component: ExampleA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Elements/Example/A",
};

export default meta;
type Story = StoryObj<typeof ExampleA>;

/* eslint-disable perfectionist/sort-objects */

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "blue",
    size: "sm",
    children: (
      <>
        <FaCrown />
        Example
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "blue",
    size: "sm",
    children: (
      <>
        <FaCrown />
        Example
      </>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    color: "blue",
    size: "sm",
    children: (
      <>
        <FaCrown />
        Example
      </>
    ),
  },
};
