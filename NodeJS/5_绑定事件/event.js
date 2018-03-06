const events = require('events')

// 创建 eventEmitter 对象用于绑定和监听事件
const eventEmitter = new events.EventEmitter()

// 通过 on() 绑定 data_received 事件
eventEmitter.on('data_received', () => {
  console.log('数据接收成功！')
})

// 通过 emit() 触发 connection 事件
eventEmitter.emit('data_received')