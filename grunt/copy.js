module.exports = {
	layout: {
		expand: true,
		cwd: 'theme/layout',
		src: '*.liquid',
		dest: '<%= app %>/layout'
	},
	templates: {
		expand: true,
		cwd: 'theme/templates',
		src: '**/**.liquid',
		dest: '<%= app %>/templates'
	},
	settings: {
		expand: true,
		cwd: 'theme/settings',
		src: 'settings_schema.json',
		dest: '<%= app %>/config'
	},
	snippets: {
		expand: true,
		cwd: 'theme/snippets',
		src: '*.liquid',
		dest: '<%= app %>/snippets'
	},
	locales: {
		expand: true,
		cwd: 'theme/locales',
		src: '*.json',
		dest: '<%= app %>/locales'
	},
	faviconmanifest: {
		expand: true,
		cwd: 'theme/',
		src: 'manifest.json',
		dest: '<%= app %>/assets'
	},
	faviconico: {
		expand: true,
		cwd: 'theme/assets/images',
		src: 'favicon.ico',
		dest: '<%= app %>/assets'
	}
};
