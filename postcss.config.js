/* eslint-disable import/no-unresolved */
const { typographist } = require('@typographist/postcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  modules: true,
  plugins: [
    autoprefixer({
      grid: true,
    }),
    typographist({
      base: ['16px'],
      lineHeight: 1.5,
      ratio: '32px at 6',
    }),
    postcssPresetEnv({
      'custom-properties': true,
      stage: 0,
    }),
  ],
};
