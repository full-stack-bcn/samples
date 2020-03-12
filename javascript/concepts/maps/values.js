let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50]
]);

// Iterate over values only
sum = 0;
for (let value of recipeMap.values()) {
  sum += value;
}
console.log(sum);
