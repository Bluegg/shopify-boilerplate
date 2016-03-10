module.exports = {
	dist: {
		files: {
			"<%= resources %>/assets/styles/style.css.liquid": "<%= resources %>/assets/styles/scss/style.scss"
		},
		options: {
			sourceMap: true,
			quiet: true
		}
	}
};
