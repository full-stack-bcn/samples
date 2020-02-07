
let obj = {
  x: 1,
  y: 'hi',
  z: true
}

const { x, y, z } = obj;
console.log(`x = ${x}, y = ${y}, z = ${z}`)

const { x: a, y: b, ...rest } = obj;
console.log(`a = ${a}, b = ${b}`)
console.log(rest)