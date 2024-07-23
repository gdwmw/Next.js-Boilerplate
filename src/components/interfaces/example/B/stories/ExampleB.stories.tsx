import type { Meta, StoryObj } from "@storybook/react";

import { FaCrown } from "react-icons/fa";

import Layout from "./Layout";

const meta: Meta<typeof Layout> = {
  args: {},
  argTypes: {
    iconColor: {
      control: { type: "color" },
    },
    textColor: {
      control: { type: "color" },
    },
  },
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Interfaces/Example/B",
};

export default meta;
type Story = StoryObj<typeof Layout>;

/* eslint-disable perfectionist/sort-objects */
export const Primary: Story = {
  args: {
    text: "This is example text",
    iconColor: "",
    textColor: "",
    icon: <FaCrown size={75} />,
  },
};
/* eslint-enable perfectionist/sort-objects */
