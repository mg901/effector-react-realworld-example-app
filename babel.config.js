module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          api: './src/api',
          router: './src/router',
          config: './src/config',
          library: './src/library',
          shared: './src/shared',
          pages: './src/pages',
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
