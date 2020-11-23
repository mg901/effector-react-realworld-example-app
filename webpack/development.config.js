const { resolve } = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PUBLIC } = require('./constants');

module.exports = {
  mode: 'development',
  output: {
    path: resolve(PUBLIC),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    overlay: true,
    stats: {
      'errors-only': true,
    },
    port: 4100,
    open: false,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
