let animal = {
  walk() {
    if (!this.isSleeping) alert(`I walk`);
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
