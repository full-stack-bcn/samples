
let obj = {
  prop1: 1,
  prop2: 'b',
  prop3: true
}

for (let prop in obj) {
  console.log(`${prop} = ${obj[prop]}`)
}

// Error: obj is not iterable
for (let prop of obj) {
  console.log(`${prop} = ${obj[prop]}`)
}