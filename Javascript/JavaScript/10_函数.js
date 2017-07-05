// 带有返回的函数
function convertToCelsius(temp){
	var result = temp - 32;
	result = result / 1.8;
	return result;
}
// 通过函数的返回值将华氏温度转为摄氏温度
var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
alert(temp_celsius);

// ！！！注意
// 关于全局变量和局部变量
// 在函数内部使用var声明的变量会被认为是局部变量，而直接使用将会被视为全局变量
