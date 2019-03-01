const path = require('path');

const rewireYAML = require('react-app-rewire-yaml');

module.exports = function override(config, env) {
  config.resolve.plugins.splice(-1, 1);

  config.resolve.extensions.push('.scss', '.sass');

  config.resolve.alias = {
    '@utils': path.resolve(__dirname, 'src/utils/'),
    '@config': path.resolve(__dirname, 'config'),
    '@locales': path.resolve(__dirname, 'src/locales/')
  };

  config = rewireYAML(config, env);

  return config;
};
