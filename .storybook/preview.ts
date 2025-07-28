import "@/src/app/globals.css";
import type { Preview } from "@storybook/nextjs";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
