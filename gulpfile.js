var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Jade compiler
gulp.task('jade', function () {
    gulp.src('./src/jade/**/*.jade')
        .pipe(jade(
            {
            pretty: true
        }
        ))
        .pipe(gulp.dest('./dist'))
});

// Sass compiler
gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

// Browser-sync for
gulp.task('jade-watch', ['jade'], browserSync.reload);
gulp.task('sass-watch', ['sass'], browserSync.reload);

// Watch task
gulp.task('watch', function () {
    browserSync({
        server: {
            baseDir: 'dist/'
        },
        reloadDelay: 1500
    });
    gulp.watch('./src/jade/**/*.jade', ['jade-watch']);
    gulp.watch('./src/sass/*.sass', ['sass-watch'])
});

gulp.task('default', ['jade', 'sass', 'watch']);