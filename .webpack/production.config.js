const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { SRC, DIST, FAVICON } = require('./constants');

module.exports = {
  mode: 'production',
  output: {
    path: DIST,
    publicPath: '/effector-react-realworld-example-app/',
    filename: '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: FAVICON,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(SRC, '404.html'),
          to: DIST,
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
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
