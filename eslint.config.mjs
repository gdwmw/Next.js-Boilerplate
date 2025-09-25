import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";
import tailwind from "eslint-plugin-tailwindcss";
import { fileURLToPath } from "node:url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  perfectionist.configs["recommended-alphabetical"],
  ...pluginQuery.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  ...tailwind.configs["flat/recommended"],
  reactPlugin.configs.flat.recommended,
  ...compat.extends(
    "next/typescript",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "!.storybook"],
  },
  {
    files: ["**/.commitlintrc.cjs"],
    rules: {
      "perfectionist/sort-objects": "off",
    },
  },
  {
    files: ["src/types/**/*"],
    rules: {
      "@tanstack/query/infinite-query-property-order": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-object-types": "off",
    },
  },
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "arrow-body-style": ["error", "as-needed"],
      curly: ["error"],
      "no-unused-expressions": "off",
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
      "react/display-name": "error",
      "react/jsx-fragments": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      // "react/no-multi-comp": "error",
      "react/no-unstable-nested-components": "error",
      "react/no-unused-prop-types": "error",
      // "react/prefer-read-only-props": "error",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["twMerge", "clsx", "twm"],
        classRegex: "^(class(Name)?$)|(.*[cC]lassName$)",
      },
    },
  },
];

export default eslintConfig;
