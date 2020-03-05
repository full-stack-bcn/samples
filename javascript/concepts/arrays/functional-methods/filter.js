// 'filter' produces a new sequence with the elements in which the passed
// function returns true.
let students = [
  { name: "Peter", mark: 6.7 },
  { name: "Paul", mark: 3.9 },
  { name: "Mary", mark: 9.2 }
];

let passed = students.filter(s => s.mark > 5.0);
passed.forEach(s => console.log(`${s.name}: ${s.mark}`));
