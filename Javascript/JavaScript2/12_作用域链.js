// 例子1：
var color = 'blue';
function changeColor(){
	if (color === 'blue') {
		color = 'red';
	}else{
		color = 'blue';
	}
}
changeColor();
// 函数内部也可以访问到color
alert(color);

// 例子2：
var color = 'blue';
function changeColor(){
	var anotherColor = 'red';
	function swapColors(){
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		// 这里可以访问color、anotherColor和tempColor
	}
	// 这里可以访问color和anotherColor，但不能访问tempColor
	swapColors();
}
// 这里只能访问color
changeColor();

// ！！！总结：内部环境可以访问到外部环境，而外部环境不能访问内部环境


var result = (function (){ //result为外部匿名函数的返回值
	var color = 'red';
	return function (){
		var color = 'yellow';
		return color;
	}
})();
result(); // 'yellow'