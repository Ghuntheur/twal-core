const path = require('path');
const {
  override,
  removeModuleScopePlugin,
  addWebpackAlias,
  babelInclude
} = require('customize-cra');

const CUSTOM_PATHS = {
  ROOT: path.resolve(__dirname),
  TWAL: path.resolve(__dirname, '@twal')
};

module.exports = {
  webpack: override(
    removeModuleScopePlugin(),
    babelInclude([path.resolve('src'), path.resolve('@twal')]),
    addWebpackAlias({
      '@root': CUSTOM_PATHS.ROOT,
      '@twal': CUSTOM_PATHS.TWAL
    })
  ),
  // return config;
  jest: function(config) {
    config.moduleNameMapper['^@twal(.*)$'] = '<rootDir>/@twal$1';

    return config;
  }
};
