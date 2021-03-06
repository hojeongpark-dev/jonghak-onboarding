// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "airbnb-base",
  ],
  ignorePatterns: ["dist/", "node_modules/", "src/graphql-types.ts"],
  rules: {
    camelcase: "off",
    quotes: [2, "double", { avoidEscape: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-undef": "off",
    "no-confusing-arrow": "off",
    "operator-linebreak": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-uses-react": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
