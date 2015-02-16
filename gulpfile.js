var gulp = require('gulp')
var concat = require('gulp-concat')


gulp.task('js', function(){
    gulp.src(['module.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'))
})

