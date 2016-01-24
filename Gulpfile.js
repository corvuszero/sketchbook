const babelify = require('babelify');
const browserify = require('gulp-browserify');
const gulp = require('gulp');
const resolutions = require('browserify-resolutions');

gulp.task('scripts', function() {
  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [babelify.configure({presets: ['es2015', 'react']})],
      plugin: [[resolutions, '*']]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['scripts']);