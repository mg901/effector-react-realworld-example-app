module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:effector/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['@typescript-eslint', 'import-helpers', 'effector', 'jsx-a11y'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
      'babel-module': {},
    },
  },
  rules: {
    'arrow-body-style': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'prettier/prettier': 0,
    'newline-before-return': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['error'],
      },
    ],

    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/no-unstable-nested-components': 0,
    'react/function-component-definition': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],

    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-default-export': 2,
    'import/no-self-import': 2,
    'import/no-named-as-default': 2,
    'import-helpers/order-imports': [
      2,
      {
        groups: [
          '/^react/',
          '/^effector-root/',
          '/^effector/',
          '/^patronum/',
          'module',
          '/^@/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],

    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-unused-vars': 2,
  },
  overrides: [
    {
      files: ['*.config.js', 'webpack/**'],
      rules: {
        'global-require': 0,
        'import-helpers/order-imports': 0,
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: [
        './src/pages/*/index.tsx',
        './src/pages/*.tsx',
        './src/pages/**/pages/**/index.tsx',
      ],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
};
