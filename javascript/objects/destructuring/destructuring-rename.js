let obj3 = {
  name: "James",
  age: 27
};

// We can rename the original fields with ":" and a new name
let { name: user, age: years } = obj3;

console.log(`user = ${user}, years = ${years}`);
