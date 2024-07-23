import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [
    plugin(({ matchVariant }) => {
      matchVariant("h-max", (value) => `@media (max-height: ${value})`);
      matchVariant("h-min", (value) => `@media (min-height: ${value})`);
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        geistMono: ["var(--font-geist-sans)"],
        geistSans: ["var(--font-geist-mono)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
};

export default config;
