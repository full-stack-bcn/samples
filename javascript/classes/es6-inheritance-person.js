
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
}

class Superhero extends Person {
  constructor(name, hero) {
    super(name);
    this.hero = hero;
  }
  breakThroughWall() {
    console.log("Look! " + this.hero + " broke through a wall!");
  }
}

let MrI = new Superhero("Bob Parr", "Mr. Incredible");
MrI.sayHi();
MrI.breakThroughWall();
