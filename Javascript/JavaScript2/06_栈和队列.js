// 栈，后进先出
var colors = ['red', 'blue'];
colors.push('brown'); //添加一项
colors[3] = 'black'; //添加一项
alert(colors.length); // 4

var item = colors.pop(); // 弹出并取得最后一项
alert(item); // "black"

// 队列，先进先出
var colors = new Array();
var count = colors.push('red', 'green'); // 推入两项并返回长度
alert(count); // 2

count = colors.push('black'); // 推入另一项
alert(count); // 3

var item = colors.shift(); // 取得第一项
alert(item); // "red"
alert(colors.length); // 2
colors.unshift('blue', 'yellow'); //在数组前端添加任意个项并返回长度