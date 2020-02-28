function salute() {
  console.log(`Hi, I'm ${this.name}`);
}

let user = {
  name: "Andy",
  age: 27,
  // We can use an already defined function as a method
  // (Association between method and object is dynamic)
  salute
};

user.salute();

// We can add a new method later
function showMentalAge() {
  console.log("Mental age:", this.age - 7);
}

user.mentalAge = showMentalAge;
user.mentalAge();
