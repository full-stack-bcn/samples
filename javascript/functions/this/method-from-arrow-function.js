// We set a field in the global object because we will see it later
this.yay = 'awesome';

// Let's create an object
let user = {
  name: "Andy",

  // We can't use arrow functions as methods when they need the 'this' variable,
  // because it will get it from the lexical scope
  salute: () => {
    console.log(`Hi, I'm ${this.name}`);
    console.log("('this' is:", this, ")");
  },

  // If a method does not use 'this' then it is ok
  sayHi: () => console.log("hi!")
};

user.salute();
user.sayHi();
