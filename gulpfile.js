const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style(){
    return gulp.src('asset/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('asset/css'))
    .pipe(browserSync.stream());
}

function responsive(){
    return gulp.src('asset/sass/responsive.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('asset/css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './',
        }
    });
    gulp.watch('./asset/sass/*.scss', style);
    gulp.watch('./asset/sass/responsive.scss', responsive);
    gulp.watch('./asset/sass/component/*.scss', style);
    gulp.watch('./asset/sass/layouts/*.scss', style);
    gulp.watch('./asset/sass/page/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./asset/css/*.css').on('change', browserSync.reload);
    gulp.watch('./asset/js/*.js').on('change', browserSync.reload);
}



exports.style = style;
exports.responsive = responsive;
exports.watch = watch;
