const gulp = require('gulp');
const {src, dest, series} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const del = require('del');

function taskDel(cb) {
	return del('style/css/b*');
}

function taskCss(cb) {
	return src('style/less/*.less')
    .pipe(concat('bundle.css'))
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
		.pipe(dest('style/css'));
}

exports.default = series(taskDel, taskCss);