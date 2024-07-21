import type { Config } from "jest";

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@/interfaces/(.*)$": "<rootDir>/src/components/interfaces/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/root/(.*)$": "<rootDir>/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
