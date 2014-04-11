var browserify = require('browserify');
var shim = require('browserify-shim');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
 
var createCommonBundle = function() {
	var inst = browserify();
	inst .add(require.resolve('./assets/common.js'))
	.bundle()
	.pipe(source('common.js'))
	.pipe(gulp.dest('./public/'));
};
 
 
gulp.task('default', function() {
	createCommonBundle();
});