module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          ui: './src/ui',
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        'effector/babel-plugin',
        [
          '@babel/transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    },
  },
};
