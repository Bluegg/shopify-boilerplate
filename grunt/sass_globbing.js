module.exports = {
	dist: {
		files: {
			"<%= resources %>/assets/styles/scss/_components.scss": "<%= resources %>/assets/styles/scss/components/**/*.scss",
			"<%= resources %>/assets/styles/scss/_objects.scss": "<%= resources %>/assets/styles/scss/objects/**/*.scss"
		}
	}
};
