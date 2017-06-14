define(function(require, exports, module){

  // 引用 a 模块
  var a = require('./a')
  a.add()

  // 暴露接口的第 2 种方式
  module.exports = {
  	bStr: 'Hello world!',
  	say: function() {
	  	console.log(this.bStr)
	  }
  }
  
})