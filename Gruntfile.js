module.exports = function(grunt) {
	var path = require('path');
	require('load-grunt-tasks')(grunt);

  var IS_PRODUCTION = grunt.option('env') == 'production';

	var options = {
		config : {
			src: 'grunt/**/*'
		},
    pkg: grunt.file.readJSON('package.json'),
		app: 'YOUR_THEME_NAME',
		resources: 'theme',
    banner: '//YOUR_THEME_NAME\n' +
      '// version: <%= pkg.version %>\n' +
      '// author: <%= pkg.author %>\n' +
      '// license: <%= pkg.licenses[0].type %>\n'
	};

	var configs = require('load-grunt-configs')(grunt, options);

	grunt.initConfig(configs);

	grunt.registerTask('build', ['imagemin', 'svgmin', 'sass_globbing', 'sass',  'postcss', 'modernizr', 'browserify', 'favicons', 'copy'])
	grunt.registerTask('default', ['build', 'watch']);
	grunt.registerTask('icons', ['fileregexrename', 'svgcss']);
};
