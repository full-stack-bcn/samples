function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Person);

function Circle(radius) {
  this.radius = radius;
}
console.log(new Circle(5));
console.log(typeof Circle.prototype);
