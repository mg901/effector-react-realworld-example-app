const { resolve } = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DIST } = require('./constants');

module.exports = {
  mode: 'development',
  output: {
    path: resolve(DIST),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 4100,
    open: false,
    historyApiFallback: true,
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
