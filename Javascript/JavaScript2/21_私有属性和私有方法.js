
// 看这个链接：https://www.zhihu.com/question/23588490

var aira;
aira = (function(){
	var _getName,
		_name;
	_name = 'HTC mobile';
	_getName = function(){
		return _name;
	};
	aira = {
		init: function(){
			_name = 'aira';
		},
		hello: function(){
			console.log('Hello, my name is ' + (_getName()));
		}
	};
	return aira;
})();
aira.init();
aira.hello();