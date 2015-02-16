var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')


gulp.task('js', function(){
    gulp.src(['module.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets'))
})
