var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
    require('./gulp/' + task)
})

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server'])

gulp.task('watch:js', ['js'], function(){
    gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('watch:css', ['css'], function(){
    gulp.watch('css/**/*.styl', ['css'])
})



