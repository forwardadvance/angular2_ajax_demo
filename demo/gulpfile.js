var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
  return gulp.src(['./app/*.ts'])
    .pipe(ts({
      "target": "es5",
      "module": "system",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": false,
      out: 'output.js'
    }))
    .pipe(gulp.dest('built/local'));
});
