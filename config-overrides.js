const path = require('path');

module.exports = function override(config, env) {
  // allow import outsise src folder
  config.resolve.plugins[1].appSrcs.push(path.resolve(__dirname, '@twal'));

  config.resolve.extensions.push('.scss', '.sass');

  // compile @twal folder
  config.module.rules[2].oneOf[1].include = [
    config.module.rules[2].oneOf[1].include,
    path.resolve(__dirname, '@twal')
  ];

  config.resolve.alias = {
    '@locales': path.resolve(__dirname, 'public/locales/'),
    '@twal': path.resolve(__dirname, '@twal/')
  };

  return config;
};
