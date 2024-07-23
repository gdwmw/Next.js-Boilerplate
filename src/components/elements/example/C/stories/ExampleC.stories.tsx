import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { FaEye } from "react-icons/fa";

import { EXAMPLEC_COLOR_OPTIONS } from "@/src/libs";

import StoriesLayout from ".";

const meta: Meta<typeof StoriesLayout> = {
  args: { iconOnClick: fn(() => alert("Clicked!")) },
  argTypes: {
    color: {
      control: { type: "radio" },
      options: EXAMPLEC_COLOR_OPTIONS,
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
  component: StoriesLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Example/C",
};

export default meta;
type Story = StoryObj<typeof StoriesLayout>;

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
