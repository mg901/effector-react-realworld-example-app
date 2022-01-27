const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { SRC, FAVICON } = require('./constants');

module.exports = {
  context: SRC,
  entry: ['react-hot-loader/patch', './index.tsx'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // alias: {
    //   'react-dom': '@hot-loader/react-dom',
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: FAVICON,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
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
