module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier"
  ],
  plugins: ["no-use-extend-native", "promise", "unicorn", "jest", "prettier"],
  rules: {
    "key-spacing": [
      "error",
      { align: { beforeColon: true, afterColon: true, on: "colon" } }
    ],
    "no-use-extend-native/no-use-extend-native": "error",
    "no-console": 0,
    "no-plusplus": 1,
    "react/prop-types": 1,
    "react/jsx-filename-extension": 0,
    strict: 0,
    "lines-between-class-members": 0,
    "unicorn/filename-case": 0,
    "react/destructuring-assignment": 0
  }
};
