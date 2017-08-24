/**
 * Created by FizzPang on 2017/8/24.
 */
var gulp = require('gulp');
var browserSync = require("browser-sync");
var watch = require("gulp-watch");
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var fs = require('fs');
var del = require('del');
var watchDir = 'app/models/*.js';

/**
 *文件修改同步浏览器
 */
gulp.task("reload", function () {
    browserSync.init({
        server: {baseDir: "./"}
    });
    gulp.watch("./views/**/*", browserSync.reload);
    gulp.watch("./public/**/*", browserSync.reload);
})

/**
 * gulp default task
 */
gulp.task("default", ['reload'], function () {
    console.log("开始愉快的编码吧...");
});