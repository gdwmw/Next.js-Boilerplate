import type { Meta, StoryObj } from "@storybook/nextjs";

import { FaEyeSlash } from "react-icons/fa";
import { fn } from "storybook/test";

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
      control: { type: "select" },
      options: [
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "month",
        "number",
        "password",
        "range",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
    },
  },
  component: StoriesLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Elements/Example/C",
};

export default meta;
type Story = StoryObj<typeof StoriesLayout>;

/* eslint-disable perfectionist/sort-objects */

export const Input: Story = {
  args: {
    componentType: "input",
    color: "default",
    label: "Example Input",
    type: "text",
    icon: <FaEyeSlash />,
  },
};

export const Select: Story = {
  args: {
    componentType: "select",
    color: "default",
    label: "Example Select",
  },
};

export const DatePicker: Story = {
  args: {
    componentType: "datepicker",
    color: "default",
    label: "Example Date Picker",
  },
};

export const TextArea: Story = {
  args: {
    componentType: "textarea",
    color: "default",
    label: "Example Text Area",
  },
};
