const SOURCE_PATH = "src/";
const BUILD_PATH = "build/";

const PATHS = {
  fonts: {
    src: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`,
    watchSrc: `${SOURCE_PATH}assets/fonts/*.{woff,woff2}`,
    dest: `${BUILD_PATH}assets/fonts/`,
  },

  images: {
    src: `${SOURCE_PATH}assets/img/**/*.{jpg,jpeg,png,svg}`,
    watchSrc: `${SOURCE_PATH}assets/img/**/*.{jpg,jpeg,png,svg}`,
    dest: `${BUILD_PATH}assets/img/`,
  },

  pug: {
    src: `${SOURCE_PATH}pug/*.pug`,
    watchSrc: `${SOURCE_PATH}pug/**/*.pug`,
    dest: BUILD_PATH,
  },

  styles: {
    src: `${SOURCE_PATH}styles/*.scss`,
    watchSrc: `${SOURCE_PATH}styles/**/*.scss`,
    dest: `${BUILD_PATH}assets/`,
  },
};

module.exports = { PATHS, BUILD_PATH };
