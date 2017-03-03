const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const webpack = require('webpack');


module.exports = function (_config, env) {
  const config = genDefaultConfig(_config, env);
  console.log(config.module.loaders);

  // Extend it as you need.
  const additionalLoaders = [
    {
      test: /.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.resolve(__dirname, '../'),
      exclude: ['node_modules'],
    },
  ];

  config.module.loaders = [...config.module.loaders, ...additionalLoaders];

  config.plugins = [...config.plugins, new webpack.ProvidePlugin({
    jQuery: 'jquery',
  })];

  return config;
};
