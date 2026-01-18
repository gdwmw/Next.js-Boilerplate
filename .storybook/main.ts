import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  addons: ["@storybook/addon-themes"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
