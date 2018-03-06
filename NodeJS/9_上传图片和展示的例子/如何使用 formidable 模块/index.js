const formidable = require('formidable')
const http = require('http')
const util = require('util')

http.createServer((req, res) => {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // 解析上传的数据
    const form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.write('received upload:\n\n')
      // util.inspect 转换成字符串
      res.end(util.inspect({fields: fields, files: files}))
    })
    return
  }

  // 表单
  res.writeHead(200, {'Content-type': 'text/html'})
  res.end(
    `<form action="/upload" enctype="multipart/form-data" method="post">
      Filename: <input type="text" name="title">
      <br>
      <input type="file" name="upload" multiple="multiple">
      <br>
      <input type="submit" value="Upload">
     </form>
    `
  )
}).listen(8888)
