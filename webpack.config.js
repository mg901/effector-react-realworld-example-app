require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack/common.config');
const prod = require('./webpack/production.config');
const dev = require('./webpack/development.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = IS_DEVELOPMENT ? merge([common, dev]) : merge([prod, common]);
