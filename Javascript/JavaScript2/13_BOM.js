// window对象
var age = 29;
function sayAge(){
	alert(this.age);
}
alert(window.age); // 29
sayAge(); // 29
window.sayAge(); // 29

// 窗口位置
window.moveBy(0,100);

// 窗口大小
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;

window.resizeTo(100,100);
window.open('http://www.baidu.com', '_blank');