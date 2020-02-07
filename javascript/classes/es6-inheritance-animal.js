
class Animal {
  constructor(type) {
    this.type = type;
  }
  makeSound() {
    console.log("<You hear an *empty* sound>");
  }
  move() {
    console.log(`The ${this.type} has moved...`);
  }
}

class Dog extends Animal {
  constructor() {
    super("dog"); // Here we call the constructor of Animal, which is the "super"-class
    
  }
  makeSound() {
    console.log("Woof! Woof!");
  }
}

let a = new Animal();
a.move();
a.makeSound();

let d = new Dog();
d.move();
d.makeSound();