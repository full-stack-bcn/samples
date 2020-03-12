let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50]
]);

// iterate over keys (vegetables)
let sum = 0;
for (let vegetable of recipeMap.keys()) {
  sum += recipeMap.get(vegetable);
  console.log(vegetable); // cucumber, tomatoes, onion
}
console.log(sum);
