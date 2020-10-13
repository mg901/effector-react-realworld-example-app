const { resolve } = require('path');
const { SRC } = require('./constants');

module.exports = {
  context: SRC,
  entry: resolve(SRC, 'index.tsx'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ['url-loader'],
      },
    ],
  },
};
