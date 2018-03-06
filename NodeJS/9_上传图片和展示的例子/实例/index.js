const server = require('./server')
const router = require('./router')
const requestHandlers = require('./requestHandlers')

// 通过一个对象来处理多个 url 路径
const handler = {}
handler['/'] = requestHandlers.start
handler['/start'] = requestHandlers.start
handler['/upload'] = requestHandlers.upload
handler['/show'] = requestHandlers.show

server.start(router.route, handler)