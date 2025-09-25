import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: ["@storybook/addon-themes"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  stories: ["./**/*.mdx", "./**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
