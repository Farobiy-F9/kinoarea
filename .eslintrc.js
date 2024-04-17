module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: false,
        tabWidth: 2,
        useTabs: false,
        quoteProps: "preserve",
        printWidth: 80,
      },
    ],
    "react/react-in-jsx-scope": "off",
    camelcase: "off",
    "react/self-closing-comp": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-curly-brace-presence": "warn",
    "react/prop-types": "warn",
    "no-unused-vars": "warn",
    "react/destructuring-assignment": "warn",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    // "jsx-a11y/label-has-associated-control": "off",
    "consistent-return": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/no-unstable-nested-components": "off",
    // Should be on for later
    "react-hooks/exhaustive-deps": "off",
    "no-debugger": "off",
    "dot-notation": "off",
    "react/button-has-type": "off",
    curly: "error",
    "react/forbid-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "default-case": "off",
    "no-nested-ternary": "off",
    "react/jsx-no-bind": [
      "warn",
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: true,
      },
    ],
  },
};
