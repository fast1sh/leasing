const gulp = require('gulp')
const image = require('gulp-image')

module.exports = function imageMinify() {
  return gulp.src('src/img/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(gulp.dest('build/img'));
}