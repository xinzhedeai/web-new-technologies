// gulp作用，压缩css js html
// 在命令行里下载好的模块 引入的时候直接写模块的名字
  // 主模块
var gulp = require('gulp');
var uglify  = require('gulp-uglify'); // 引用模块，让我线稿了开发vue饿了么程序的时候，webpack里面的import语法
var concat = require('gulp-concat'); // 引用压缩多个js模块
var minifyCss = require('gulp-minify-css'); // 引入css压缩功能模块
var minifyHtml = require('gulp-minify-html');

console.info(concat);

// 创建任务
// 1、任务的名称
// 2、具体执行什么操作
gulp.task('js', () => {
  // 1、找到想要压缩的文件
  gulp.src('./1.js') // 多个文件 *.js
  // .pipe 意思是下一步
  .pipe(uglify()) // uglify()执行压缩方法 开始压缩
  // .pipe(concat('all.js')) // 合并
  .pipe(gulp.dest('./compass')) // 处理好的文件输出到哪里  --输出到当前路径下
});
// 压缩css
gulp.task('css', (params) => {
  gulp.src('./*.css')
      .pipe(minifyCss())
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./compass'))
});

gulp.task('html', (params) => {
  gulp.src('./index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('./compass'))
});
// 执行任务 （参数2 任务名称） （这里在命令行里面执行gulp的时候，只执行一次）
gulp.task('default', ['js', 'css', 'html']); // 默认执行js这一个任务


// 实时压缩(只要文件改变，就会执行一次)
// 参数 1、监听 2、执行什么任务
gulp.watch('./*.js', ['js']);
gulp.watch('./*.css', ['css']);
gulp.watch('./*.html', ['html']);

