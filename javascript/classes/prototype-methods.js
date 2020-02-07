
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHi = function() {
  console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`)
}

let fulanito = new Person('James Bond', 27)
let fulanito = new Person('Fulanito', 44)
let wrong = Person('Unknown', 15)

console.log(fulanito.__proto__.constructor)
console.log(Person.prototype.constructor)

console.log(fulanito.__proto__.constructor === Person)
console.log(fulanito.__proto__.constructor === Person)

fulanito.sayHi()
fulanito.sayHi()