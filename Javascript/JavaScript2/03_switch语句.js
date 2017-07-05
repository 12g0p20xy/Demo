// switch语句

if (i == 25) {
	alert('25');
}else if (i == 35) {
	alert('35');
}else if (i == 45) {
	alert('45');
}else {
	alert('Other');
}
// 等同于
switch (i) {
	case 25:
		alert('25');
		break;
	case 35:
		alert('35');
		break;
	case 45:
		alert('45');
		break;
	default:
		alert('Other');
}

// case的值可以是常量、变量甚至表达式
var i = 'Hello world';
switch (i) {
	case 'Hello'+' world':
		alert('Greeting was found.');
		break;
	case 'goodbye':
		alert('	Closing was found.');
		break;
	default:
		alert('Unexpected message was found.');
}

// 还可以这样，让每个case按顺序被求值：
var num = 25;
switch (true) {
	case num < 0:
		alert('Less than 0.');
		break;
	case num >= 0 && num <= 10:
		alert('Between 0 and 10.');
		break;
	case num > 10 && num <= 20:
		alert('Between 10 and 20.');
		break;
	default:
		alert('More than 20.');
}
// 返回More than 20.