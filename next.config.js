const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const config = require('config');

// Plugins
const sassPlugin = [withSass, { }];

// Configs
const RUNTIME_CONFIG = {
  API_URL: config.get('API_URL')
};

module.exports = withPlugins([sassPlugin], {
  serverRuntimeConfig: RUNTIME_CONFIG,
  publicRuntimeConfig: RUNTIME_CONFIG
});