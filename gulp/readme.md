1下载node  （js——> c++ ——> 操作系统）
2、node -v
3、npm install gulp -g 全局安装gulp(-g让我们能在命令行上使用gulp命令)
4、使用命令gulp -v 检查有没有安装好
5、export以及require在node里面直接使用的，不需要引用插件。连或者是在define模块里面使用。
6、新建一个名字叫作gulpfile.js的文件（名称必须必须是这个）
7、npm install gulp(把gulp模块下载下来，然后在文件里面去使用)
8、gulp.task(“任务名称”， 具体任务)
9、gulp 执行压缩操作
（合并多个文件）
1、添加依赖npm install gulp-concat


#压缩css
  npm install gulp-minify-css

#压缩html
  npm install gulp-minify-html
  npm install gulp-htmlmin –save-dev // 另一种压缩html的模块包（-save-dev保存到package.json文件中，实际上，如果不加上这个也能保存到package.json文件中）；https://blog.csdn.net/zhongguohaoshaonian/article/details/53207254
###debug
1、压缩路径下所有js的时候 *.js 在gulp构建的时候会报错(concat整合)
2、压缩css文件，不能进行实时监控。

**注意**
1、html是不能合并的只能进行压缩


