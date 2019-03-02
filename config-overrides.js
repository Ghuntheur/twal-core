const path = require('path');
const { paths } = require('react-app-rewired');

const CUSTOM_PATHS = {
  ROOT: path.resolve(__dirname),
  TWAL: path.resolve(__dirname, '@twal')
};

module.exports = {
  paths: function(paths, env) {
    paths['twalCore'] = CUSTOM_PATHS.TWAL;
    return paths;
  },
  webpack: function(config, env) {
    // allow import outsise src folder
    config.resolve.plugins[1].appSrcs.push(CUSTOM_PATHS.ROOT, CUSTOM_PATHS.TWAL);

    // config.resolve.extensions.push('.scss', '.sass');

    // compile @twal folder
    config.module.rules[2].oneOf[1].include = [
      config.module.rules[2].oneOf[1].include,
      CUSTOM_PATHS.TWAL
    ];

    config.resolve.alias = {
      '@root': CUSTOM_PATHS.ROOT,
      '@twal': CUSTOM_PATHS.TWAL
    };

    return config;
  },
  jest: function(config) {
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      '^@twal(.*)$': '<rootDir>/@twal$1'
    };
    config.moduleFileExtensions.push('scss', 'sass');

    return config;
  }
};
