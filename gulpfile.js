var gulp 				= require("gulp");
var beep 				= require('beepbeep');
var gutil 			= require('gulp-util');
var plumber 		= require('gulp-plumber');
var jshint			= require("jshint-stylish");
var uglify 			= require("gulp-uglify");
var sass 				= require("gulp-ruby-sass");
var livereload 	= require("gulp-livereload");

var onError = function (err) {
	// beep([0, 0, 0]);
	gutil.log(gutil.colors.green(err));
};

// Uglify JS

gulp.task('compress:js', function() {
	 return gulp.src("_/components/js/script.js")
	 	.pipe(plumber({
	 		errorHandler: onError
	 	}))
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('_/js'))
		.pipe(livereload());
 });


// Turn SASS into CSS and lint CSS

gulp.task("sass", function () {

	return gulp.src('_/components/sass/**/*.scss')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(sass({compass: true}))
		.pipe(gulp.dest("_/css"))
		.pipe(livereload());
});

// HTML
gulp.task('html', function() {
	return gulp.src(['./*.html'])
		.pipe(livereload());
})

// Watch Everything

gulp.task('watch', function () {
	// livereload
	livereload.listen();

	// Watch JS
	gulp.watch("_/components/js/*.js", ["compress:js"]);

	// Watch Sass
	gulp.watch("_/components/sass/**/*.scss", ["sass"]);
	
	// Watch HTML and livereload
	gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ["compress:js", "sass", "html", "watch"]);