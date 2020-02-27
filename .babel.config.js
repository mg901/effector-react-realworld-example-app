module.exports = {
  plugins: ['react-hot-loader/babel'],
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/typescript',
        '@babel/react',
      ],
    },
  },
};
