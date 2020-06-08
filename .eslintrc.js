module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-default-export': 2,
    'import/no-self-import': 2,
    'import/no-named-as-default': 2,
    'arrow-body-style': 2,
    'newline-before-return': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': [
      1,
      {
        allow: ['error'],
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/ban-types': 0,
  },
  overrides: [
    {
      files: ['./src/ui/**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
      },
    },
    {
      files: ['*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};
