let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50]
]);

for (let pair of recipeMap) {
  let key = pair[0];
  let value = pair[1];
  console.log(key, value);
}
