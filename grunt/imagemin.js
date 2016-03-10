module.exports = {
	options: {
		optimizationLevel: 7,
		cache: false
	},
	files: {
		expand: true,
		cwd: "<%= resources %>/assets/images/",
		src: [
			"**/*.{png,jpg,jpeg,gif}"
		],
		dest: "<%= app %>/assets"
	}
};
