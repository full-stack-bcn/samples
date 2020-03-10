function capitalize(str) {
  let first = str[0].toUpperCase();
  let rest = str.slice(1);
  return first + rest;
}

function capitalize2(str) {
  let [first, ...rest] = str;
  return first.toUpperCase() + rest.join("");
}

console.log(capitalize("pau") + " " + capitalize("fernández"));
console.log(capitalize2("pau") + " " + capitalize2("fernández"));
