// 三种系统对话框**************************

// alert()*********************************
alert('Hello world!');

// confirm()*******************************
if (confirm('Are you sure?')) { //检测confirm()的布尔值，true表示单击了ok
	alert("I'm so glad you're sure!");
}else{
	alert("I'm sorry to hear you're not sure.");
};

// prompt()********************************
var result = prompt("What is your name?", ""); //prompt()接受两个参数，要显示给用户的文本和文本输入域的默认值(可以为空)
if (result !== null) {
	alert('Welcome, ' + result);
};