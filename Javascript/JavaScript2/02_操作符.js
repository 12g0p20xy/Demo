var num1 = 2, num2 = 20;
var num3 = num1-- + num2; // 等于22
var num4 = num1 + num2; // 等于21

// 条件操作符
var max = (num1 > num2)?num1:num2;

// break和continue
var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		break;
	}
	num++;
};
alert(num); // 返回4

var num = 0;
for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	num++;
};
alert(num); // 返回8