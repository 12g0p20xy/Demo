// ！！！推荐：使用字面量语法创建对象
// 创建一个对象并添加了属性和方法
var person = {
	name: 'Nico',
	age: 29,
	job: 'Software Engineer',
	sayName: function(){
		alert(this.name);
	}
};

// 理解对象的内部属性
// 访问器属性
var book = {
	_year: 2004, // _year下划线表示只能通过对象方法访问的属性，和下面的year加以区别
	edition: 1
}
Object.defineProperty(book, 'year', {
	get: function(){
		return this._year;
	},
	set: function(newValue){
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		};
	}
});

book.year = 2005;
alert(book.edition); // 2