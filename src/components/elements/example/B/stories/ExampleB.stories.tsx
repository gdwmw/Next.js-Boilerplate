import type { Meta, StoryObj } from "@storybook/nextjs";

import { FaCrown } from "react-icons/fa";

import StoriesLayout from ".";

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
    icon: <FaCrown size={75} />,
  },
};
