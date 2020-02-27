slet A = [1, 2, 3, 4, 5];
console.log(A.map(x => x * 2)); // -> [2, 4, 6, 8, 10]
console.log(A.map(n => "*".repeat(n))); // -> ["*", "**", "***", "****", "*****"]

let figures = [
  { shape: "rect", size: 5 },
  { shape: "circle", size: 10 }
];
console.log(figures.map(f => f.shape)); //
