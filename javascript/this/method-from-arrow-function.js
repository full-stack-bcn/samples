
module.exports.globalVariable = 5;

let user = {
  name: "Andy",

  // But we can't use arrow functions as methods when they need the 'this' variable,
  // because it will get it from the lexical scope
  salute: () => {
    console.log(`Hi, I'm ${this.name}`);
    console.log("('this' is:", this, ")");
  },

  //
  sayHi: () => console.log("hi!")
};

user.salute();
user.sayHi();
