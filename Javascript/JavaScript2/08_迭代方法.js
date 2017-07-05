// every()：对数组每一项运行给定函数，如果该函数每一项都返回true，则返回true；
// filter()：对数组每一项运行给定函数，返回该函数会返回true的项组成的数组；
// forEach()：对数组每一项运行给定函数，这个方法没有返回值；
// map()：对数组每一项运行给定函数，返回每次函数调用的结果组成的数组；
// some()：对数组每一项运行给定函数，如果该函数对任何一项返回true，则返回true；
// 以上方法都不会修改数组中包含的值；

// every
var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
	return (item > 2);
});
console.log(everyResult); // false

// some
var someResult = numbers.some(function(item, index, array){
	return (item > 2);
});
console.log(someResult); // true

// filter
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
	return (item > 2);
});
console.log(filterResult); // [3,4,5,4,3]

// map
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
	return (item * 2);
});
console.log(mapResult); // [2,4,6,8,10,8,6,4,2]