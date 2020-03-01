class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `${this.name} (${this.age})`;
  }
}

class Superhero extends Person {
  constructor(name, age, powers) {
    super(name, age);
    this.powers = powers;
  }
}

let mri = new Superhero("Mr. Incredible", 42, [
  "Break through walls",
  "strong"
]);

console.log(mri);
console.log(mri.toString());
