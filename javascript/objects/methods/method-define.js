let user = {
  name: "Andy",

  // We can define a method declaring it inside the object literal
  salute() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.salute();
