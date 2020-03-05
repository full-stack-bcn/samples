/*
  A closure occurs when a function is returned that references
  the outer scope
*/

function makeJoiner(sep) {
  // This arrow function references 'sep', which is outside of its scope
  return (a, b) => `${a}${sep}${b}`;
}

const commaJoiner = makeJoiner(", ");
const andJoiner = makeJoiner(" and ");

console.log(commaJoiner("Zipi", "Zape"));
console.log(andJoiner("Mortadelo", "Filemón"));
