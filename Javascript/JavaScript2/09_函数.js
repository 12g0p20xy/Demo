// 正确，可以运行
alert(sum(10,10));
function sum(num1, num2){
	return num1 + num2;
}
// 产生错误，无法运行
alert(sum(10,10));
var sum = function(num1, num2){
	return num1 + num2;
};

// 例1
// 函数作为值来使用
function callSomeFunction(someFunction, someArgument){
	return someFunction(someArgument);
}
function add10(num){
	return num + 10;
}
var result = callSomeFunction(add10, 10);
console.log(result); // 20

// 例2
// 从一个函数中返回另一个函数
function createComparison(propertyName){
	return function(object1, object2){
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		}else if (value1 > value2) {
			return 1;
		}else{
			return 0;
		}
	};
}

var data = [{name: 'Zack', age: 28}, {name: 'Nico', age: 29}];
data.sort(createComparison('name'));
alert(data[0].name); // Nico

data.sort(createComparison('age'));
alert(data[0].name); // Zack