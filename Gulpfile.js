const babelify = require('babelify');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const htmlreplace = require('gulp-html-replace');
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('pack', function() {
  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: [babelify.configure({presets: ['es2015', 'react']})]
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch(['app/components/*.js', 'app/components/**/*.js'], ['pack']);
});

gulp.task('default', ['pack', 'watch']);
