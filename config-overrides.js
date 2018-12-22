const { paths } = require('react-app-rewired')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

/* config-overrides.js */
module.exports = function override(config, env) {
	config.resolve.alias = {
		...config.resolve.alias,
		'components': path.resolve(__dirname, `${paths.appSrc}/components`),
		'config': path.resolve(__dirname, `${paths.appSrc}/config`),
		'pages': path.resolve(__dirname, `${paths.appSrc}/pages`),
		'store': path.resolve(__dirname, `${paths.appSrc}/store`),
		'utils': path.resolve(__dirname, `${paths.appSrc}/utils`),
	}
	config.plugins = [
		...config.plugins,
		new BundleAnalyzerPlugin()
	]
  return config
}