const print = msg => () => console.log(msg);

let obj = {};
let animal = {
  eat: print("nyam nyam"),
  weight: 0
};
let rabbit = {
  jump: print("Boing!"),
  type: "rabbit"
};
rabbit.__proto__ = animal;
rabbit.eat();

// This function has a prototype and constructor?
function f() {
  this.x = 3;
  return 5;
}

let fobj = new f();

console.log(rabbit.weight);
