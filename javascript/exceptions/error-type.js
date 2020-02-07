
const fs = require('fs')

function f(obj) {
  obj.wrongMethod()
}
function g(x) {
  x.anotherMethod(y)
}

try {
  f({})
  g(2)
} catch (e) {
  switch (e.name) {
    case 'ReferenceError':
      console.log(`ReferenceError: ${e.message}`)
      break
    default:
      console.log(`Otro: ${e.name}: ${e.message}`)
  }
}