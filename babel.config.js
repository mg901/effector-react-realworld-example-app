module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    '@babel/transform-async-to-generator',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          shared: './src/shared',
          entities: './src/entities',
          widgets: './src/widgets',
          features: './src/features',
          pages: './src/pages',
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
