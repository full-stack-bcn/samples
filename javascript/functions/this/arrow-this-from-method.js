let user = {
  name: "Steve",

  makeSaluteFunction(hi) {
    // The arrow function we return here takes the 'this' variable
    // from the 'makeSaluteFunction' method.
    return () => console.log(`${hi}, I'm ${this.name}!`);
  }
};

// When we call 'makeSaluteFunction' it will generate closures
// that capture the 'this' variable, which is the user.
const saluteHi = user.makeSaluteFunction('Hi');
const saluteHello = user.makeSaluteFunction('Hello');

saluteHi();
saluteHello();
