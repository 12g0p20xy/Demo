const http = require('http')
const url = require('url')
const querystring = require('querystring')

function start(route, handler) {
  http.createServer((request, response) => {
    // 获取路径
    const pathname = url.parse(request.url).pathname
    // 接收 POST 提交的数据
    let postData = ''

    request.setEncoding('utf8')
    request.on('data', (postDataChunk) => {
      postData += postDataChunk
    })
    request.on('end', () => {
      postData = querystring.parse(postData)
      // 传递参数到 router.js 代理路径
      route(handler, pathname, response, postData)
    })
    // // 开启服务器
    // response.writeHead(200, { 'Content-Type': 'text/html' })
    // response.write(html)
    // response.end()
  }).listen(8000)

  console.log('Server has started!')
}

exports.start = start