// 超时调用
setTimeout(function(){
	alert('Hello world!');
}, 1000);

// 取消超时调用
var timeoutId = setTimeout(function(){
	alert('Hello world!');
}, 1000);
clearTimeout(timeoutId);

// 间歇调用
var intervalId = setInterval(function(){
	alert('Hello world!');
}, 1000);
clearInterval(intervalId);

// 常见超时调用的用法，无需跟踪id
var num = 0,
	max = 10;
function incrementNumber(){
	num++;
	if (num < max) {
		setTimeout(incrementNumber, 500);
	}else{
		alert('Done');
	}
}
setTimeout(incrementNumber, 500);