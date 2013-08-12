module.exports = function(config) {
	config.set({
		basePath: '',
		files: [
		  'app/js/lib/angular.js',
		  'app/js/lib/angular-*.js',
		  'test/lib/angular/angular-mocks.js',
		  'app/js/app/*.js',
		  'test/unit/**/*.js'
		],
		frameworks: ['jasmine'],
		autoWatch: true,
		browsers: ['Chrome'],
		junitReporter: {
		  outputFile: 'test_out/unit.xml',
		  suite: 'unit'
		}
	});
};