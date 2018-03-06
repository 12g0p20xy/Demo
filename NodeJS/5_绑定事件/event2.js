const fs = require('fs')

// 使用异步函数读取文件
fs.readFile('data.txt', (err, data) => {
  if (err) {
    console.log(err.stack)
    return
  }
  console.log(data.toString())
})