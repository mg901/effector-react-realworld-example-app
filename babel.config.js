module.exports = {
  plugins: ['react-hot-loader/babel'],
  env: {
    test: {
      presets: ['@babel/env', '@babel/typescript', '@babel/react'],
    },
  },
};
