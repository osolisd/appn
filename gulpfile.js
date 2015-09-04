var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: 'progress'
  }, done).start();
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8000
  });
});

gulp.task('default', ['connect']);
