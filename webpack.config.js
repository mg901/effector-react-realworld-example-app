require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./.webpack/common.config.js');
const prod = require('./.webpack/production.config.js');
const dev = require('./.webpack/development.config.js');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = IS_DEVELOPMENT ? merge([common, dev]) : merge([prod, common]);
