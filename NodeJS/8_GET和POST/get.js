const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  // util.inspect() 可将对象转换为字符串
  // url 模块的 parse() 函数可以解析 url 中的查询参数
  response.end(util.inspect(url.parse(request.url, true)))
}).listen(8000)

// 在浏览器访问 http://localhost:8000/user?name=aaa&password=bbb