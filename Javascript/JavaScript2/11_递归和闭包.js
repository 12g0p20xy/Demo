// 递归
function factorial(num){
	if (num <= 1) {
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}

// 闭包：有权访问另一个函数作用域中变量的函数，常见方式就是在一个函数内部创建另一个函数
// 理解作用域链