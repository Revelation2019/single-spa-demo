const path = require('path');
const pkg = require('./package.json');

module.exports = function override(config, env) {
  config.entry = path.resolve(__dirname, 'src/index.tsx');
  config.output.libraryTarget = 'window';
  config.output.library = pkg.name;
  delete config.optimization;
  return config;
};
