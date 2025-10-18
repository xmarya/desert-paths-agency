import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
    rules: {
      "no-unused-var": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
