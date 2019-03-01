const path = require('path');

module.exports = function override(config, env) {
  // allow import outsise src folder
  config.resolve.plugins.splice(-1, 1);

  config.resolve.extensions.push('.scss', '.sass');

  config.resolve.alias = {
    '@locales': path.resolve(__dirname, 'public/locales/'),
    '@twal': path.resolve(__dirname, '@twal/')
  };

  return config;
};
