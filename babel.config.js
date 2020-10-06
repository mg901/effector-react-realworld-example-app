module.exports = {
  env: {
    test: {
      presets: ['@babel/env', '@babel/typescript', '@babel/react'],
      plugins: [
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
