var gulp = require('gulp'),
    sass = require('gulp-sass'),
    auto = require('gulp-autoprefixer'),
    pug = require('gulp-pug');


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


gulp.task('build', ['sass', 'pug']);


gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/templates/**/*.pug', ['pug']);
});
