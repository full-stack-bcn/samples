let obj = {
  prop1: 1,
  prop2: "b",
  prop3: true
};

// We can iterate properties of an object with for-in
for (let prop in obj) {
  console.log(`${prop} = ${obj[prop]}`);
}

// Warning: do not confuse with for-of which works for arrays only
for (let prop of obj) { // <-- Produces TypeError
  console.log(`${prop} = ${obj[prop]}`);
}
