
'use strict';

var babel = require('gulp-babel'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

/*
 * Build the CSS.
 */
gulp.task('css', function () {
    return gulp.src('./assets_src/sass/studentdotcom.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./public/css/'))
        .pipe(notify({ message: 'CSS build complete' }));
});

/*
 * Build the JS.
 */
gulp.task('scripts', function () {
    return gulp.src(['./assets_src/scripts/**/*.js'])
        .pipe(eslint({
            'rules': {
                'no-plusplus': 0,
                'strict': 2,
                'curly': 1
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(concat('studentdotcom.js'))
        .pipe(gulp.dest('./public/scripts/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/scripts/'))
        .pipe(notify({ message: 'Scripts build complete' }));
});

/*
 * Build the images.
 */
gulp.task('images', function () {
    return gulp.src('./assets_src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./public/images/'))
        .pipe(notify({ message: 'Images build complete' }));
});

/*
 * Clean previous files before building.
 */
gulp.task('clean', function (callback) {
    return del(['./public/scripts/', './public/css/', './public/images/'], callback);
});

/*
 * Watch for source file changes in css, js and images. Re-build the assets.
 */
gulp.task('watch', function () {
    gulp.watch('./assets_src/sass/**/*.scss', ['css']);
    gulp.watch('./assets_src/scripts/**/*.js', ['scripts']);
    gulp.watch('./assets_src/images/**/*', ['images']);
    livereload.listen();
    gulp.watch(['./public/**']).on('change', livereload.changed);
});

/*
 * Default task runner to build CSS, JS and images.
 */
gulp.task('default', ['clean'], function () {
    gulp.start('css', 'scripts', 'images');
});