'use strict';

// Protractor configuration
var config = {
  specs: ['modules/*/tests/e2e/*.js']
};

if (process.env.TRAVIS) {
  config.capabilities = {
    browserName: 'firefox'
  };
} else {
  config.capabilities = {
    browserName: 'chrome'
  };
}
config.capabilities = {
  browserName: 'phantomjs'
};
exports.config = config;
