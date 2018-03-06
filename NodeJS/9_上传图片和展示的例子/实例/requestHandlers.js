const querystring = require('querystring')
const fs = require('fs')
// 引用 formidable
const formidable = require("formidable")

const start = (response, postData) => {
  console.log('Request handler "index" was called.')

  const body =
    `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="upload">
        <button type="submit">Upload File</button>
      </form>
    </body>
    </html>`

  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(body)
  response.end()

}

const upload = (response, request) => {
  console.log('Request handler "upload" was called.')

  // 使用 formidable 处理上传的文件
  const form = new formidable.IncomingForm()
  form.parse(request, (error, fields, files) => {
    fs.renameSync(files.upload.path, '/tmp/test.png')
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('received image: <br>')
    response.write('<img src="/show" />')
    response.end()
  })
}

const show = (response, postData) => {
  console.log('Request handler "show" was called.')
  // 读取路径上的文件
  fs.readFile('/tmp/test.png', 'binary', (error, file) => {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'})
      response.write(error + '\n')
      response.end()
    }
    else {
      response.writeHead(200, {'Content-Type': 'image/png'})
      response.write(file, 'binary')
      response.end()
    }
  })
}

exports.start = start
exports.upload = upload
exports.show = show