/*
Copyright 2013-2014 ASIAL CORPORATION

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var CORDOVA_APP = false;

////////////////////////////////////////

var gulp = require('gulp');
var browserSync = require('browser-sync');

////////////////////////////////////////
// browser-sync
////////////////////////////////////////
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: __dirname+"/www",
      index: 'index.html',
      directory: true
    },
    files: [],
    watchOptions: {
      //debounceDelay: 400
    },
    ghostMode: false,
    notify: false
  });
});

////////////////////////////////////////
// serve
////////////////////////////////////////
gulp.task('serve', ['browser-sync'], function() {
  var watched = [
    'www/*/*'
  ];

  gulp.watch(watched, {
    debounceDelay: 300
  });

  // for livereload
  gulp.watch([
    'www/*/*.{js,css,html}'
  ]).on('change', function(changedFile) {
    gulp.src(changedFile.path)
      .pipe(browserSync.reload({stream: true, once: true}));
  });
});