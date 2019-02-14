'use strict';

var gulp = require('gulp');
var fancyLog = require('fancy-log');

var jshint = require('gulp-jshint');

var codeFiles = ['**/*.js', '!node_modules/**'];

function taskSpec(tasks) {
  return gulp.parallel ? gulp.parallel(tasks) : tasks;
}

gulp.task('lint', function() {
  fancyLog('Linting Files');
  return gulp.src(codeFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter());
});

gulp.task('watch', function() {
  fancyLog('Watching Files');
  gulp.watch(codeFiles, taskSpec(['lint']));
});

gulp.task('default', taskSpec(['lint', 'watch']));
