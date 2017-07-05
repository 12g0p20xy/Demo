var beatles = Array();
beatles[0] = 'John';
beatles[1] = 'Paul';
beatles[2] = 'George';
beatles[3] = 'Ringo';
// 或者
var beatles = Array('John', 'Paul', 'George', 'Ringo');
// 或者
var beatles = ['John', 'Paul', 'George', 'Ringo'];
// 还可以把beatles数组第一个元素赋值为“John”
var name = 'John';
beatles[0] = name;
// 数组还可以包含其他数组
var lennon = ['John', 1940, false];
var beatles = [];
beatles[0] = lennon;

// 默认的数组每个元素下标是0，1，2这样的数字，被称为传统数组；
// 可以为每个元素明确给出下标，可以是数字或字符串，这种被称为关联数组；
// 数组也是对象，因此并不推荐使用，而应该使用对象
var lennon = Array();
lennon['name'] = 'John';
lennon['year'] = 1940;
lennon['living'] = false;