var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function () {
    connect.server({
        port: 8888
    })
});

gulp.task('default', ['webserver']);