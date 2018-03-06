const http = require('http')
const querystring = require('querystring')

const html = 
  `<html><head><meta charset="utf-8"><title>nodejs post</title></head>
    <body>
      <form method="post">
        Username: <input name="username">
        <br>
        Password: <input name="password">
        <br>
        <button>Submit</button>
      </form>
    </body>
   </html>`

http.createServer((request, response) => {
  // 定义一个 post 变量，用于存储请求体的信息
  let post = ''

  // 每次触发 request 的 data 事件（获取请求体数据），就添加到变量 post 里
  request.on('data', (chunk) => {
    post += chunk
  })

  // 触发 end 事件后，通过 querystring.parse() 将 post 解析成真实的 POST 请求
  request.on('end', () => {
    post = querystring.parse(post)

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    // 输出提交的数据
    if (post.username && post.password) {
      response.write('Username: ' + post.username)
      response.write('Password: ' + post.password)
    }
    // 输出表单
    else {
      response.write(html)
    }

    response.end()
  })
}).listen(8000)