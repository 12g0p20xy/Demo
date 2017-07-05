// 使用构造函数Object()实例一个对象
var person = new Object();
person.name = 'Nico';
person.age = 29;
// 或者使用对象字面量语法
var person = {
	name: 'Nico',
	age: 29
};

// 使用Array构造函数创建数组
var colors = new Array();
var colors = new Array(20); // length值为20的数组
var colors = new Array('red', 'blue', 'green');
// 使用数组字面量语法
var colors = ['red', 'blue', 'green'];
var name = [];

// 读取和设置数组的值
var colors = ['red', 'blue', 'green'];
alert(colors[0]); // 显示第一项
colors[2] = 'black'; // 修改第三项
colors[3] = 'brown'; // 新增第四项
colors[colors.length] = 'black'; // 新增一项



var colors = ['red', 'green', 'blue'];
alert(colors); // red,green,blue
alert(colors.toString()); // red,green,blue
alert(colors.valueOf()); // red,green,blue
alert(colors.join(',')); // red,green,blue
alert(colors.join('||')); // red||green||blue