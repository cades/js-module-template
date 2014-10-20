var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    mocha = require('gulp-mocha');

var sources = ['src/main.js'],
    tests = ['test/test.js'],
    moduleName = 'your-awsome-module-name';

gulp.task('build', ['test'], function(){
  return gulp.src(sources)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({basename: moduleName}))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('test', function(){
  return gulp.src(sources.concat(tests))
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function(){
  gulp.watch(sources.concat(tests), ['build']);
});
