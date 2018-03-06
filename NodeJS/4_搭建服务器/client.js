const http = require('http')

const options = {
  host: 'localhost',
  port: '8000',
  path: '/index.html'
}

const callback = (response) => {
  let html = ''
  // 更新数据
  response.on('data', (data) => {
    html += data
  })
  // 数据接收完成
  response.on('end', () => {
    console.log(html)
  })
}

// 向服务端发送请求
const request = http.request(options, callback)
request.end()