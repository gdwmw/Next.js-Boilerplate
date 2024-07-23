import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { FaCrown } from "react-icons/fa";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  args: { onClick: fn(() => alert("Clicked!")) },
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["rose", "emerald"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline", "ghost"],
    },
  },
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Example/A",
};

export default meta;
type Story = StoryObj<typeof Layout>;

/* eslint-disable perfectionist/sort-objects */
export const Solid: Story = {
  args: {
    variant: "solid",
    color: "rose",
    size: "sm",
    children: (
      <>
        <FaCrown data-testid="testing-icon" />
        Example
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "rose",
    size: "sm",
    children: (
      <>
        <FaCrown data-testid="testing-icon" />
        Example
      </>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    color: "rose",
    size: "sm",
    children: (
      <>
        <FaCrown data-testid="testing-icon" />
        Example
      </>
    ),
  },
};
/* eslint-enable perfectionist/sort-objects */
