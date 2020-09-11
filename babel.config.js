module.exports = {
  env: {
    test: {
      presets: ['@babel/env', '@babel/typescript', '@babel/react'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@core': './src/core',
          '@library': './src/library',
          '@api': './src/api',
          '@ui': './src/ui',
          '@config': './src/config',
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx'], // если не указать расширения возникнут ошибки eslint
      },
    ],
  ],
};
