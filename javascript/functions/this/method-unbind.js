
// We change the global object for later
global.name = "GLOBAL";

// We create a normal object with a method
let obj = {
  name: "Robin",
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// We extract the method
let method = obj.sayHi;

// Here the method is called standalone...
method();
