module.exports = {
	dist: {
		files: {
			"<%= resources %>/images/icons/**": "<%= resources %>/images/icons/*"
		},
		options: {
			replacements: [
			{
				pattern: "vectors_",
				replacement: ""
			}]
		}
	}
};