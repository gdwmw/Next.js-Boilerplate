import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-themes",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
  stories: ["./**/*.mdx", "./**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
