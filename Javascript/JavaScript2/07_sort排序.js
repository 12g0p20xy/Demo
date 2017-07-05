// sort接受比较函数
function compare(val1, val2){
	if (val1 < val2) {
		return -1;
	}else if (val1 > val2) {
		return 1;
	}else{
		return 0;
	}
}
var values = [0,1,5,10,15];
values.sort(compare);
alert(values); // 0,1,5,10,15