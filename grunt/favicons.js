module.exports = {
	options: {
		html: "<%= app %>/snippets/head-favicon.liquid"
	},
	your_target: {
		src: "<%= resources %>/assets/images/favicon.png",
		dest: "<%= app %>"
	}
};
