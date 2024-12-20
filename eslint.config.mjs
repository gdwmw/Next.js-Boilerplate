import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  perfectionist.configs["recommended-alphabetical"],
  ...compat.extends(
    "next/typescript",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ),
  {
    files: ["**/.commitlintrc.cjs"],
    rules: {
      "perfectionist/sort-objects": "off",
    },
  },
  {
    plugins: {
      react,
    },
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
      "arrow-body-style": ["error", "as-needed"],
      curly: ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: { type: {}, value: {} },
          environment: "node",
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          ignoreCase: true,
          internalPattern: ["^@/.+"],
          maxLineLength: undefined,
          newlinesBetween: "always",
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-modules": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["twm"],
      },
    },
  },
];

export default eslintConfig;
