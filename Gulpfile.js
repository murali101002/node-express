/*jshint esversion: 6 */


var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

// create a new gulp task 'style' to check the code styling and code conventions
gulp.task('style', function() {
  //return this stream to be utilized to create sub-tasks  
  return gulp.src(jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    }));
});

// gulp.task('inject',()=>{
//   var wiredep = require('wiredep');
//   var options = {
//     bowerJson: require('./bower.json'),
//     directory: './public/lib'
//   };
//   gulp.src('./src/views/*.html')
//       .pipe(wiredep(options))
//       .pipe(gulp.dest('./src/views'));
// });


gulp.task('serve',['style'],()=>{
  var options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 5000
    },
    watch: jsFiles
  };
  // nodemon will take care of all gulp.pipe.pipe.... stuff
  return nodemon(options)
          .on('restart', ()=>{
            console.log('Restarting...');
          });
});