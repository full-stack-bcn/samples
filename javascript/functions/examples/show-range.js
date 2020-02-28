function showRange(from, to) {
  let range = [];
  while (from <= to) {
    range.push(from);
    from++;
  }
  console.log(range);
}

let from = 5;
showRange(from, 20);
console.log(from);
