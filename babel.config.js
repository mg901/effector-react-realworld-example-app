module.exports = {
  env: {
    test: {
      presets: ['@babel/env', '@babel/typescript', '@babel/react'],
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
