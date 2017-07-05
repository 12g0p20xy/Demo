var msg;
alert(typeof msg); // "undefined"

var car = null;
alert(typeof car); // "object"

alert(null == undefined); // true

if ((0.1 + 0.2) == 0.3) {
	alert('true');
}else{
	alert('false');
};

var num = 10;
num.toString(); // "10"
num.toString(2); // "1010"