import eslint from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import jest from "eslint-plugin-jest";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
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
  eslintPluginPrettierRecommended,
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
    rules: {
      "prettier/prettier": "warn",
    },
  },
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
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "arrow-body-style": ["warn", "as-needed"],
      // "better-tailwindcss/enforce-consistent-class-order": ["warn", { order: "official" }],
      "better-tailwindcss/enforce-consistent-important-position": ["warn", { position: "recommended" }],
      "better-tailwindcss/enforce-consistent-variable-syntax": ["warn", { syntax: "shorthand" }],
      "better-tailwindcss/enforce-shorthand-classes": ["warn"],
      "better-tailwindcss/no-deprecated-classes": ["warn"],
      "better-tailwindcss/no-duplicate-classes": ["warn"],
      "better-tailwindcss/no-unknown-classes": ["warn", { ignore: ["font-inter", "font-geistMono", "font-geistSans", "font-roboto"] }],
      "better-tailwindcss/no-unnecessary-whitespace": ["warn"],
      curly: ["warn"],
      "no-unused-expressions": "off",
      "perfectionist/sort-imports": [
        "warn",
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
      "react/display-name": "warn",
      "react/jsx-fragments": "warn",
      "react/jsx-no-undef": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/no-children-prop": "warn",
      "react/no-danger": "warn",
      // "react/no-multi-comp": "warn",
      "react/no-unstable-nested-components": "warn",
      "react/no-unused-prop-types": "warn",
      // "react/prefer-read-only-props": "warn",
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
