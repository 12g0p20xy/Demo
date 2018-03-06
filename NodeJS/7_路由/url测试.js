const http = require('http')
const url = require('url')
const querystring = require('querystring')

const urlStr = 'http://localhost:8000/user?name=John&age=18'
const postStr = 'name=John&age=18'

console.log(url.parse(urlStr))                  // 转换 url 字符串为一个对象
console.log(url.parse(urlStr).pathname)         // /user
console.log(url.parse(urlStr).query)            // name=John&age=18
console.log(querystring.parse(postStr))         // 转换 post 数据为一个对象
console.log(querystring.parse(postStr)['name']) // John