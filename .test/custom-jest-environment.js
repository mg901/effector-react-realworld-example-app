const BrowserEnvironment = require('jest-environment-jsdom');

class CustomEnvironment extends BrowserEnvironment {}

module.exports = CustomEnvironment;
