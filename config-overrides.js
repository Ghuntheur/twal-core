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

const addSassResourcesLoader = () => config => {
  const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  rules.forEach(r => {
    if (r.test && r.test.toString().includes('scss')) {
      r.use.push({
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.join(CUSTOM_PATHS.TWAL, 'styles', 'abstracts', '_colors.scss'),
            path.join(CUSTOM_PATHS.TWAL, 'styles', 'abstracts', '_variables.scss'),
            path.join(CUSTOM_PATHS.TWAL, 'styles', 'abstracts', '_mixins.scss'),
            path.join(CUSTOM_PATHS.TWAL, 'styles', 'abstracts', '_animations.scss')
          ]
        }
      });
    }
  });
  return config;
};

module.exports = {
  webpack: override(
    addSassResourcesLoader(),
    removeModuleScopePlugin(),
    babelInclude([path.resolve('src'), CUSTOM_PATHS.TWAL]),
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
