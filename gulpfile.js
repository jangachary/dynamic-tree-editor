"use strict";
var gulp = require("gulp");

// var sass = require("gulp-sass");
const sass = require('gulp-sass')(require('sass'));
gulp.task("sass", function () {
  gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});
