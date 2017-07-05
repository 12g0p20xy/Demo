function init(){
	var name = 'closure';
	function displayName(){
		alert(name);
	}
	displayName();
	name = "new";
}
init();
// 返回"closure"
// 函数内部可以引用外部的参数和变量
// displayName() 是一个内部函数，定义于 init()之内且仅在该函数体内可用


// 即使外部函数已经返回，当前函数仍然可以引用外部函数所定义的变量
function makeAddr(x) {
    return function(y) {
        return x+y;    
    };
}
// add5和add10都是闭包
var add5 = makeAddr(5);
var add10 = makeAddr(10);
alert(add5(2)); // 7
alert(add10(2)); // 12