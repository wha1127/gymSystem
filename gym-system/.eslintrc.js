module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-console": "off",
    "no-trailing-spaces": "off",
    "indent": "off",
    "spaced-comment": "off",
    "no-new": "off",
    "key-spacing": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    "quotes": "off",
    "semi": "off",
    "keyword-spacing": "off",
    "space-before-blocks": "off",
    "comma-spacing": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
    "no-multiple-empty-lines": "off",
    "block-spacing": "off",
    "padded-blocks": "off",
    "arrow-spacing": "off",
    "no-sequences": "off",
    "no-unused-expressions": "off",
    "no-multi-spaces": "off",
    "no-unused-vars": "off",
    "camelcase ": "off",
    "vue/no-side-effects-in-computed-properties": "off"
  }
};