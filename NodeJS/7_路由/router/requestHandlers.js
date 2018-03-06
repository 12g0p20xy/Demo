// 用于处理不同的路径

exports.index = (response, postData) => {
  // console.log('Request handler "index" was called.')

  const body =
    `<html>
    <head><title>nodejs router</title></head>
    <body>
      <form action="/upload" method="post">
        <input type="text" name="msg" />
        <button>Submit</button>
      </form>
    </body>
    </html>`

  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()

}

exports.upload = (response, postData) => {
  // console.log('Request handler "upload" was called.')
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Your message is ' + postData.msg)
  response.end()
}