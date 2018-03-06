// http 协议模块
const http = require('http')
// url 解析模块
const url = require('url')
// 文件系统模块
const fs = require('fs')
// 路径解析模块
const path = require('path')

const httpServer = http.createServer((request, response) => {

  let hasExt = true,
      requestUrl = request.url,
      pathName = url.parse(requestUrl).pathname
 
  // 对请求的路径进行解码，防止中文乱码
  pathName = decodeURI(pathName)

  // console.log(pathName)
 
  // 如果路径中没有扩展名
  if(path.extname(pathName) === '') {

    // 如果不是以 / 结尾的，加 / 并作 301 重定向
    if (pathName.charAt(pathName.length - 1) != '/') {
      pathName += '/'
      let redirect = 'http://' + request.headers.host + pathName
      response.writeHead(301, {
        location: redirect
      })
      response.end()
      return
    }

    // 添加默认的访问页面
    pathName += "index.html"
    // 标记默认页面是程序自动添加的
    hasExt = false
  }
 
  // 获取资源文件的真实路径（需要根据实际位置改动）
  let filePath = path.join("/var/www/", pathName)
  console.log(filePath)
 

  // 将请求的文件扩展名转换为对应的文件类型
  function getContentType(filePath) {
    const contentType = {
      html: "text/html",
      js: "text/javascript",
      css: "text/css",
      gif: "image/gif",
      jpg: "image/jpeg",
      png: "image/png",
      ico: "image/icon",
      txt: "text/plain",
      json: "application/json",
      default: "application/octet-stream"
    }
    let ext = path.extname(filePath).substr(1)
    if (contentType.hasOwnProperty(ext)) {
      return contentType[ext]
    }
    else {
      return contentType.default
    }
  }
  let contentType = getContentType(filePath)
  // console.log(contentType)


  // 如果文件名存在
  fs.exists(filePath, function(exists) {
    if(exists) {
      response.writeHead(200, {'content-type': contentType})
      let stream = fs.createReadStream(filePath, {flags: 'r', encoding: null})
      stream.on('error', function() {
        response.writeHead(500, {'content-type': 'text/html'})
        response.end('<h1>500 Server Error</h1>')
      })
      // 返回文件内容
      stream.pipe(response)
    }
    // 文件名不存在
    else {
      // 如果这个文件不是程序自动添加的（有扩展名），直接返回 404
      if(hasExt) {
        response.writeHead(404, {'content-type': 'text/html'})
        response.end('<h1>404 Not Found</h1>')
      }
      else {
        // 如果文件是程序自动添加的且不存在，则表示用户希望访问的是该目录下的文件列表
        let html = '<head><meta charset="utf-8"></head>'

        try {
          // 用户访问目录
          let filedir = filePath.substring(0, filePath.lastIndexOf('\\'))
          // 获取用户访问路径下的文件列表
          const files = fs.readdirSync(filedir)
          // 将访问路径下的所以文件列举出来，并添加超链接
          for(let i in files) {
            let filename = files[i]
            html += '<div><a href="' + filename + '">' + filename + '</a></div>'
          }
        }
        catch (e){
          html += "<h1>您访问的目录不存在</h1>"
        }
        response.writeHead(200, {'content-type': 'text/html'})
        response.end(html)
      }
    }
  })

})

httpServer.listen(8000, () => {
  console.log('[HttpServer][Start]', 'runing at http://127.0.0.1:8000/')
})