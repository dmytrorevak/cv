var gulp = require('gulp'),
    sass = require('gulp-sass'),
    auto = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin');


gulp.task('sass', function() {
    gulp.src('./src/sass/main.sass')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(sass())
        .pipe(auto())
        .pipe(gulp.dest('build/css'));
});


gulp.task('pug', function() {
    gulp.src('./src/templates/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'));
});


gulp.task('img', function () {
    gulp.src('./src/img/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 8
        }))
        .pipe(gulp.dest('build/img'));
});


gulp.task('fonts', function () {
    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('build/fonts/'));
});


gulp.task('build', ['pug', 'sass', 'img', 'fonts']);


gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/templates/**/*.pug', ['pug']);
});
