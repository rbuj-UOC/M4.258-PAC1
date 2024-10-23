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
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/no-script-style-type": "error",
      "@html-eslint/attrs-newline": [
        "error",
        {
          closeStyle: "sameline"
        }
      ]
    }
  }
];
