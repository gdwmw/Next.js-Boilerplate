export const EXAMPLEC_COLOR_OPTIONS = ["red", "green", "blue", "default"] as const;
export type TExampleCColor = (typeof EXAMPLEC_COLOR_OPTIONS)[number];
