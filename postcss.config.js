const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const { typographist } = require('@typographist/postcss');

module.exports = {
  plugins: [
    postcssNormalize(),
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
