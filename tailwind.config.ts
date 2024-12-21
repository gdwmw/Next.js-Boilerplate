import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [],
  theme: {
    extend: {},
  },
};

export default config;
