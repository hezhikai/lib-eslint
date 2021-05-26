const rules = require('./rules');
const prettierrc = require('hzkweb-package').prettier;

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    amd: true,
    es6: true,
    jest: false
  },
  globals: {}, // readonly、writable
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['html', 'import', 'json', 'node', 'promise', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierrc], // 不符合 prettier 规则的代码，要进行错误提示（红线）
    ...rules
  }
};
