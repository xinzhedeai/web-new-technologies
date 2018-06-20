// 1、在js文件互相引用模块 1.js里面因哟个2.js
// 2、暂时不用管
// 3、导出(告诉别的文件可以使用我的xxx东西)
define((require, exports, module) => {
  // 这里是定义模块的地方
  function fn(dom) {
    return document.querySelector(dom);
  }
  module.exports = fn;
});