function Person() {
  let name = ''
  this.setName = (thyname) => {
    name = thyname
  }
  this.sayName = () => {
    console.log(name)
  }
}

module.exports = Person