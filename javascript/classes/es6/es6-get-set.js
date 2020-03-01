class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newFullName) {
    const parts = newFullName.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

// Create a new person
let _ = new Person("James", "Bond");

// Use the getter
console.log(_.fullName);

// Use the setter
_.fullName = "Fulanito Pérez";
console.log(_.firstName);
console.log(_.lastName);
