function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hi, I'm " + this.name);
};

function Superhero(name, hero) {
  this.name = name;
  this.hero = hero;
}
Superhero.prototype.breakThroughWall = function() {
  console.log(`Look! ${this.hero} broke through a wall!`);
};

Superhero.prototype.__proto__ = Person.prototype;

let bob = new Superhero("Bob Parr", "Mr. Incredible");
bob.sayHi();
bob.breakThroughWall();
