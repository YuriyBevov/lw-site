const { src, dest, series, watch } = require("gulp");

const { PATHS, BUILD_PATH } = require("./gulp.config");

const browserSync = require("browser-sync").create();

// PUG
const gulpPug = require("gulp-pug");

// CSS
const autoprefixer = require("gulp-autoprefixer");
// const cleanCss = require("gulp-clean-css");
const scss = require("gulp-sass")(require("sass"));

/*GULP TASKS*/

const fonts = () => {
  return src([PATHS.fonts.src]).pipe(dest(PATHS.fonts.dest));
};

const images = () => {
  return src(PATHS.images.src).pipe(dest(PATHS.images.dest));
};

const pug = () => {
  return src([PATHS.pug.src])
    .pipe(
      gulpPug({
        pretty: true,
      })
    )
    .pipe(dest(PATHS.pug.dest));
};

const styles = () => {
  return src(PATHS.styles.src, { sourcemaps: false })
    .pipe(scss())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
      })
    )
    .pipe(dest(PATHS.styles.dest));
  // .pipe(browserSync.stream());
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: BUILD_PATH,
      open: true,
      cors: true,
      port: 3000,
    },
  });

  watch(PATHS.pug.watchSrc, series(pug, refresh));
  watch(PATHS.styles.watchSrc, series(styles, refresh));
  //   watch(PATHS.fonts.watchSrc, series(fonts, refresh));
};

const refresh = (done) => {
  browserSync.reload();
  done();
};

/*GULP TASKS*/

exports.start = series(fonts, images, pug, styles, server);
exports.build = series(fonts, images, pug, styles);
