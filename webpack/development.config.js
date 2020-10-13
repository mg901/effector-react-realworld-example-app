const { resolve } = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DIST } = require('./constants');

module.exports = {
  mode: 'development',
  output: {
    path: resolve(DIST),
    publicPath: '/dist/',
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
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/404.html' }],
    },
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
