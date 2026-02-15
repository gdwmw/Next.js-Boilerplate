import eslint from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import jest from "eslint-plugin-jest";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  perfectionist.configs["recommended-alphabetical"],
  ...pluginQuery.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  jest.configs["flat/recommended"],
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".commitlintrc.cjs",
    "node_modules/**",
    "!.storybook",
    "storybook-static/**",
    "coverage/**",
    "dist/**",
  ]),
  {
    files: ["src/types/**/*"],
    rules: {
      // "perfectionist/sort-enums": "off",
      "perfectionist/sort-interfaces": "off",
      "perfectionist/sort-object-types": "off",
    },
  },
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      // "better-tailwindcss/enforce-consistent-class-order": ["error", { order: "official" }],
      "better-tailwindcss/enforce-consistent-important-position": ["error", { position: "recommended" }],
      "better-tailwindcss/enforce-consistent-variable-syntax": ["error", { syntax: "shorthand" }],
      "better-tailwindcss/enforce-shorthand-classes": ["error"],
      "better-tailwindcss/no-deprecated-classes": ["error"],
      "better-tailwindcss/no-duplicate-classes": ["error"],
      "better-tailwindcss/no-unknown-classes": ["error", { ignore: ["font-inter", "font-geistMono", "font-geistSans", "font-roboto", "xs:"] }],
      "better-tailwindcss/no-unnecessary-whitespace": ["error"],
      curly: ["error"],
      "no-unused-expressions": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: [],
          environment: "node",
          fallbackSort: { type: "unsorted" },
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "unknown",
          ],
          ignoreCase: true,
          internalPattern: ["^~/.+", "^@/.+"],
          maxLineLength: undefined,
          newlinesBetween: 1,
          newlinesInside: 0,
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
      "better-tailwindcss": {
        callees: ["twm"],
        entryPoint: "src/app/global.css",
        variables: [".*TWM"],
      },
    },
  },
]);

export default eslintConfig;
