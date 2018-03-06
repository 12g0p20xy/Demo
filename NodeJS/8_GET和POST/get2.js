const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  
  // url.parse() 可以解析 url 参数
  const params = url.parse(request.url, true).query
  response.write('姓名: ' + params.name)
  response.write('密码: ' + params.password)
  response.end()
}).listen(8000)

// 在浏览器访问 http://localhost:8000/user?name=aaa&password=bbb