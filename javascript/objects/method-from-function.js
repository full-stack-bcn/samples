function salute() {
  console.log(`Hi, I'm ${this.name}`);
}

let user = {
  name: "Andy",
  // We can also use an already defined function as a method
  // (There is no "real" association between object and method)
  salute
};

user.salute();
