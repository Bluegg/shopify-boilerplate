module.exports = {
	dist: {
		files: {
			'<%= resources %>/assets/styles/scss/_svg.scss': ['<%= resources %>/assets/images/icons/*.svg']
		},
		options: {
			cssprefix: '',
			previewhtml: null
		}
	}
};
