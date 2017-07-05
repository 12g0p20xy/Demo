var lennon = Object();
lennon.name = 'John';
lennon.year = 1940;
lennon.living = false;

// 或者
var lennon = {name:'John', year:1940, living:false};

// 例子
var beatles = {};
beatles.vocalist = lennon;
// beatles.vocalist.name 输出的值是 "John"