const path = require('path');

module.exports = function override(config, env) {
  // allow import outsise src folder
  config.resolve.plugins.splice(-1, 1);

  config.resolve.extensions.push('.scss', '.sass');

  config.resolve.alias = {
    '@utils': path.resolve(__dirname, 'src/utils/'),
    '@config': path.resolve(__dirname, 'config'),
    '@locales': path.resolve(__dirname, 'public/locales/')
  };

  return config;
};
