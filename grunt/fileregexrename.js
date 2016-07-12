module.exports = {
	dist: {
		files: {
			"<%= resources %>/assets/images/icons/*": "<%= resources %>/assets/images/icons/*"
		},
		options: {
			replacements: [
			{
				pattern: "Icons_",
				replacement: ""
			}]
		}
	}
};
