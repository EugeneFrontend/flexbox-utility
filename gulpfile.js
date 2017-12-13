const gulp = require('gulp'); // подключили gulp

gulp.task('test', function (){
    console.log("Hello World!");
} );

gulp.task('autoprefixer', function (){
    gulp.src('source/*.css') // забираем файл который будем обрабатывать
    .pipe(autoprefixer({     // запуск автопрефиксера
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css')) //выгружаем обработанный файл
});