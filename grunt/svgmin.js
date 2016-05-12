module.exports = {
	dist: {
		options: {
			plugins: [
				{ "removeXMLProcInst": false }
			]
		},
		files: [{
			expand: true,
			cwd: "<%= resources %>/assets/images/",
			src: [
				"**/*.svg"
			],
			dest: "<%= app %>/assets"
		}]
	}
};
