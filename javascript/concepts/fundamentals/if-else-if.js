let weight = 4.5; // <-- Change the weight to try different values
let result;

if (weight < 3) {
  result = "small";
} else if (weight < 5) {
  result = "medium";
} else {
  result = "large";
}

console.log(`Result is "${result}"`);
