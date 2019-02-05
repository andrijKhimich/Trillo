let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  notify = require("gulp-notify"),
  sourcemaps = require('gulp-sourcemaps'), // path to includes files
  del = require('del'), // remove build folder
  rigger = require('gulp-rigger'), // build html files in one
  cache = require('gulp-cache'),
  gcmq = require('gulp-group-css-media-queries'); // group css media

let path = 'app/';


gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: path
    },
    notify: true,
    open: true,
    // tunnel: true,
    // tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
  });
});


gulp.task('html', function () {
  return gulp.src(path + 'html/*.html')
    .pipe(rigger())
    .pipe(gulp.dest(path))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass', function () {
  return gulp.src(path + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded' //or 'compressed'
    }).on('error', notify.onError()))
    .pipe(autoprefixer(['last 15 versions'], {
      cascade: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('main.css'))
    .pipe(gcmq('main.css'))
    .pipe(cleanCSS()) // zip css
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(path + 'css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// gulp.task('js', function () {
//   return gulp.src([
//       // uncomment what you need
//       path + 'libs/jquery_3.3.1/jQuery.3.3.1.js',
//       //  path + 'libs/cycle2/jquery.cycle2.min.js',
//       //  path + 'libs/slick-1.8.1/slick.min.js'
//       //  path + 'libs/waterwheelCarousel/jquery.waterwheelCarousel.min.js',
//       path + 'libs/iziModal_1.6.0/iziModal.min.js'
//       //  path + 'libs/modernizr/modernizr.js',
//       //  path + 'libs/plugins-scroll/plugins-scroll.js',
//       //  path + 'libs/respond/respond.min.js',
//       //  path + 'libs/waypoints/waypoints.min.js', // with animate cssб
//       //  path + 'libs/animate/animate-css.js'
//     ])
//     .pipe(sourcemaps.init())
//     .pipe(concat('libs.min.js')) // convert all in one file
//     .pipe(sourcemaps.write('/'))
//     .pipe(gulp.dest(path + 'js')) // deploy to app/js
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });


gulp.task('watch', function () {
  gulp.watch(path + 'html/**/*.html', gulp.parallel('html'));
  gulp.watch(path + 'scss/**/*.scss', gulp.parallel('sass'));
  // gulp.watch(path + 'js/**/*.js,', gulp.parallel('js'));
  // gulp.watch(path + '*.html', gulp.parallel('html'));
});

// gulp.task('svg', ['svgSpriteBuild']);
gulp.task('clear', function () {
  return cache.clearAll();
});
gulp.task('default', gulp.parallel('watch', 'clear', 'html', 'sass', 'browser-sync'));


gulp.task('removebuild', function () {
  return del('build');
});




gulp.task('buildHtml', function () {
  return gulp.src(path + '*.html')
    // .pipe(cleanhtml())
    .pipe(gulp.dest('build/'));
});
gulp.task('buildCss',
  function () {
    return gulp.src(path + 'css/**.css')
      .pipe(gulp.dest('build/css'));
  });
gulp.task('buildScript',
  function () {
    return gulp.src(path + 'js/**/*')
      .pipe(gulp.dest('build/js/'));
  });
gulp.task('buildImg',
  function () {
    return gulp.src(path + 'img/**/*')
      .pipe(gulp.dest('build/img/'));
  });
gulp.task('buildFonts',
  function () {
    return gulp.src(path + 'fonts/**/*')
      .pipe(gulp.dest('build/fonts/'));
  });



// Build task
gulp.task('build', gulp.series('removebuild', gulp.parallel('html', 'sass'), 'buildHtml', 'buildCss', 'buildScript', 'buildImg', 'buildFonts'));