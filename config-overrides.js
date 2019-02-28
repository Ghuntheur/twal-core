module.exports = function override(config, env) {
  config.resolve.plugins.splice(-1, 1);
  return config;
};
