let students = [
   { name: "Peter", mark: 6.7 },
   { name: "Paul",  mark: 3.9 },
   { name: "Mary",  mark: 9.2 },
];

let passed = students.filter((student) => student.mark > 5.0);
passed.forEach(s => console.log(s.name));

