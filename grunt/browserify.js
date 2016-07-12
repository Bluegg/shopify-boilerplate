module.exports = {
	dist: {
		files: {
			'<%= app %>/assets/app.js.liquid': '<%= resources %>/assets/scripts/app.js'
		},
		options: {
			browserifyOptions: {
				debug: true
			},
			transform: [['babelify', {presets: ['es2015']}]],
			noParse: ['drift-zoom'],
			plugin: ['minifyify']
		}
	}
};
