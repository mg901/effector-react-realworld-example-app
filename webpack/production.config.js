const { DefinePlugin, HashedModuleIdsPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { DIST } = require('./constants');

module.exports = {
  mode: 'production',
  output: {
    path: DIST,
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].[contenthash].js',
  },
  watch: false,
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
