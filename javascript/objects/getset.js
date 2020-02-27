class Person {
  constructor(name) {
    this.privateName = name;
  }
  get name() {
    return this.privateName;
  }
  set name(newname) {
    this.privateName = newname;
  }
}

let p = new Person("Bob");
console.log(p.name);
p.name = "Roberta";
console.log(p);
