module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "no-unused-expressions": "off",
  },
};
