module.exports = {
	sass: {
		files: [
			"<%= resources %>/assets/styles/scss/**/*.scss"
		],
		tasks: [
			"sass_globbing:dist",
			"sass:dist",
			"postcss:dist",
		]
	},
	js: {
		files: [
			"<%= resources %>/assets/scripts/**/*.js"
		],
		tasks: [
			"browserify:dist",
		]
	},
	img: {
		files: [
			"<%= resources %>/assets/images/**/*.{png,jpeg,jpg,gif}"
		],
		tasks: [
			"newer:imagemin"
		]
	},
	svg: {
		files: [
			"<%= resources %>/assets/images/**/*.svg"
		],
		tasks: [
			"newer:svgmin"
		]
	},
	svgIcons: {
		files: [
			"<%= resources %>/assets/images/icons/**/*.svg"
		],
		tasks: [
			"svgcss",
			"sass_globbing:dist",
			"sass:dist",
			"postcss:dist",
		]
	},
	copy: {
		files: [
			'theme/layout/*.liquid',
			'theme/locales/*.json',
			'theme/settings/settings_schema.json',
			'theme/snippets/*.liquid',
			'theme/templates/**/*.liquid',
		],
		tasks: ['newer:copy']
	}
};
