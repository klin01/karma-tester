module.exports = function (grunt) {
	grunt.initConfig( {
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			options: {
		    	configFile: 'karma.conf.js',
			    // runnerPort: 8080,
			    // browsers: ['Chrome'],
			    // autoWatch: true
			},
			unit: {
				configFile: 'karma-unit.conf.js'
			},
			e2e: {
				configFile: 'karma-e2e.conf.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
};