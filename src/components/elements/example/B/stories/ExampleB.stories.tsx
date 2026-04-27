import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Crown } from "lucide-react";

import StoriesLayout from "./StoriesLayout";

const meta: Meta<typeof StoriesLayout> = {
  args: {},
  argTypes: {
    iconColor: {
      control: { type: "color" },
    },
    textColor: {
      control: { type: "color" },
    },
  },
  component: StoriesLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Elements/Example/B",
};

export default meta;
type Story = StoryObj<typeof StoriesLayout>;

/* eslint-disable perfectionist/sort-objects */

export const Primary: Story = {
  args: {
    text: "This is example text",
    iconColor: "",
    textColor: "",
    icon: <Crown size={75} />,
  },
};
