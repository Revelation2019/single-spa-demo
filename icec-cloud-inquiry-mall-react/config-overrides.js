const pkg = require('./package.json');
const path = require('path');
// const StatsPlugin = require('stats-webpack-plugin');

module.exports = function override(config, env) {
  // 生成chunk映射文件
  // config.plugins.push(new StatsPlugin('micro_manifest.json', {
  //   chunkModules: false,
  //   entrypoints: true,
  //   source: false,
  //   chunks: false,
  //   modules: false,
  //   assets: false,
  //   children: false,
  //   exclude: [/node_modules/]
  // }))
  config.entry = path.resolve(__dirname, 'src/index.tsx');
  config.output.library = pkg.name;
  config.output.libraryTarget = 'window';
  // config.output.filename = 'index.js';
  delete config.optimization;
  // delete config.optimization.optimization.runtimeChunk ;
  // config.optimization.runtimeChunk = false;

  return config;
};
