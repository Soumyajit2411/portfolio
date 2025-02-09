module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        logger: "writable",
        process: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", "dist", "**/*.test.js"],
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      import: require("eslint-plugin-import"),
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      "key-spacing": [
        "error",
        { align: "colon", beforeColon: false, afterColon: true },
      ],
      "no-console": "warn",
      "comma-style": ["error", "last"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "function-paren-newline": ["error", "never"],
      semi: ["error", "always"],
      "brace-style": ["error", "1tbs"],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": [
        "error",
        { allowAllPropertiesOnSameLine: true },
      ],
      "max-len": ["error", { code: 120 }],
      "arrow-body-style": ["error", "as-needed"],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
