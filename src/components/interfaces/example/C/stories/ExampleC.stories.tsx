import type { Meta, StoryObj } from "@storybook/react";

import { FaEye } from "react-icons/fa";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  args: {},
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["rose", "emerald"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    type: {
      control: { type: "text" },
    },
  },
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Example/C",
};

export default meta;
type Story = StoryObj<typeof Layout>;

/* eslint-disable perfectionist/sort-objects */
export const Input: Story = {
  args: {
    componentType: "input",
    color: "rose",
    label: "Example Input",
    type: "text",
    icon: <FaEye />,
  },
};

export const Select: Story = {
  args: {
    componentType: "select",
    color: "rose",
    label: "Example Select",
  },
};

export const TextArea: Story = {
  args: {
    componentType: "textarea",
    color: "rose",
    label: "Example TextArea",
  },
};
/* eslint-enable perfectionist/sort-objects */
