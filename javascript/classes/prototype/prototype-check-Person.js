function Person(name, age) {
  this.name = name;
  this.age = age;
}

let fulanito = new Person("James Bond", 27);
let fulanito = new Person("Fulanito", 44);

console.log(fulanito.__proto__.constructor);
console.log(Person.prototype.constructor);

console.log(fulanito.__proto__.constructor === Person);
console.log(fulanito.__proto__.constructor === Person);
