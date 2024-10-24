import pluginJs from "@eslint/js";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import JavaScriptInsideHTML from "eslint-plugin-html";
import globals from "globals";

export default [
  eslintConfigPrettier,
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    // recommended configuration included in the plugin
    ...html.configs["flat/recommended"],
    files: ["src/**/*.html"],
    plugins: {
      "@html-eslint": html,
      JavaScriptInsideHTML
    },
    languageOptions: {
      parser: htmlParser
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/attrs-newline": ["error", { "closeStyle": "sameline" }],
      "@html-eslint/require-meta-charset": "error",
      "@html-eslint/element-newline": ["error", {skip: ["pre", "code"]}],
      "@html-eslint/id-naming-convention": ["error", "kebab-case"],
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/lowercase": "error",
      "@html-eslint/no-duplicate-attrs": "error",
      "@html-eslint/no-inline-styles": "error",
      "@html-eslint/no-multiple-empty-lines": ["error", {"max": 2}],
      "@html-eslint/no-multiple-h1": "error",
      "@html-eslint/no-obsolete-tags": "error",
      "@html-eslint/no-skip-heading-levels": "error",
      "@html-eslint/no-script-style-type": "error",
      "@html-eslint/no-trailing-spaces": "error",
      "@html-eslint/quotes": ["error", "double"],
      "@html-eslint/require-img-alt": "error",
      "@html-eslint/require-lang": "error",
      "@html-eslint/require-li-container": "error",
      "@html-eslint/require-meta-description": "error",
      "@html-eslint/require-meta-viewport": "error",
      "@html-eslint/require-title": "error"
    }
  }
];
