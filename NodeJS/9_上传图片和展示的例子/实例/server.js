const http = require('http')
const url = require('url')

const start = (route, handler) => {
  http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname
    console.log("Request for " + pathname + " received.")
    route(handler, pathname, response, request)
  }).listen(8000)

  console.log('Server has started!')
}

exports.start = start