// 引入模块
var student = require('./student')
var teacher = require('./teacher')

// 定义了新的 add 方法，但不会覆盖到其他模块的 add 方法
function add(teacherName, studentsName) {
	// 这里使用的是 teacher 模块的 add 方法
	teacher.add(teacherName)
	studentsName.forEach(function(item, index) {
		// 这里使用的是 student 模块的 add 方法
		student.add(item)
	})
}

// 暴露出本模块 add 方法的接口
exports.add = add