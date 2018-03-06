var head = require('./head')
var body = require('./body')

exports.creatCat = function(name) {
  return {
    name: name,
    head: head.create(name),
    body: body.create(name)
  }
}