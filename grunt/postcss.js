module.exports = {
	options: {
		map: true,
		processors: [
			require('autoprefixer')({browsers: ['last 2 version', 'ie 9']}),
			require('cssnano')()
		]
	},
	dist: {
		expand: true,
		flatten: true,
		src: '<%= resources %>/assets/styles/style.css.liquid',
		dest: '<%= app %>/assets'
	}
};
