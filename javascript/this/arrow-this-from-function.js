let user = {
  name: "Steve",

  makeSaluteFunction() {
    // The arrow function we return here takes the 'this' variable
    // from the 'makeSaluteFunction' method.
    return () => console.log(`Hi, I'm ${this.name}!`);
  }
};

const salute = user.makeSaluteFunction();

salute();
