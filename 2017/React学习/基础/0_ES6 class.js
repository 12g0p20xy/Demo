class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    return this.name
  }
}

const Jack = new Person('Jack', 18)
console.log(`${Jack.name} is ${Jack.age} years old.`)
console.log(Jack.sayName())