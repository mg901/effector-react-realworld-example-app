module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks'],

  rules: {
    'no-unused-vars': 1,
    'newline-before-return': 2,
    'import/no-default-export': 2,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/forbid-prop-types': 0,
  },
};
