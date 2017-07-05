function a (x1, x2){
	console.log(x1+x2);
}
a(111, 222);

// 参数可以不用命名，直接用arguments对象访问
function sayHi(){
	alert('Hello ' + arguments[0] + ',' + arguments[1]);
}

// 包含引用类型值的变量是一个指向该对象的指针而不是对象本身；
// 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终指向同一个对象
// 例子：
num1 = 10;
num2 = num1;
// num1和num2是独立的
// 而下面obj1和obj2指向同一个对象
var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'Nico';
alert(obj2.name); // "Nico"

// JavaScript没有块级作用域
if (true) {
	var color = 'blue';
};
alert(color); // 返回"blue"，这里color并没有销毁