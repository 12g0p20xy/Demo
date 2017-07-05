// 对象是自包含的数据集合，包含在对象里的数据可以通过两种形式访问——属性（property）和方法（method）
// 在JavaScript里，属性和方法都是用“点”语法来访问
Object.property;
Object.method();

// 实例（instance）是对象的具体个体，同一个对象的不同实例可以有不同的属性
// 为给定对象创建一个新实例需要使用new关键字
// 下面的语句实例化了一个叫做jeremy的Person对象;
var jeremy = new Person;
jeremy.age;
jeremy.mood;
// 比如数组就是一个内建对象，使用new初始化一个数组就是在创建一个Array对象的新实例
var beatles = new Array();
beatles.length;
// 其他内建对象还包括Math对象和Date对象等
var num = 7.561;
var num = Math.round(num);