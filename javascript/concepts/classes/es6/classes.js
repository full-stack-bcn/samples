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

let mrIncredible = new Superhero("Mr. Incredible", 52, [
  "Breaks through walls",
  "strong"
]);

console.log(mrIncredible);
console.log(mrIncredible.toString());
