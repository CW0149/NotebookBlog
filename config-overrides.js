const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'components': path.resolve(__dirname, `${paths.appSrc}/components/`),
		'config': path.resolve(__dirname, `${paths.appSrc}/config/`),
		'pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
		'store': path.resolve(__dirname, `${paths.appSrc}/store/`),
	})(config, env);
  return config;
}