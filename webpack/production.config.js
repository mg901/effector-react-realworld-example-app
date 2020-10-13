const { resolve } = require('path');
const { DefinePlugin, HashedModuleIdsPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { SRC, PUBLIC } = require('./constants');

module.exports = {
  mode: 'production',
  output: {
    path: PUBLIC,
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: resolve(SRC, '404.html'), to: PUBLIC }],
      options: {
        concurrency: 100,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HashedModuleIdsPlugin(),
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
