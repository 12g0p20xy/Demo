const http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text-plain' })
  response.write('Hello world!')
  response.end()
}).listen(8000)

// 打开 http://127.0.0.1:8000/