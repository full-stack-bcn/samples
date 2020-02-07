
const _ = require('lodash')

let obj = {
  coords: {
    x: 1,
    y: 2,
  },
  names: {
    first: 'a',
    last: ['b1', 'b2'],
  },
}

let objCopy = _.cloneDeep(obj)
console.log(obj)
console.log(objCopy)
console.log()

objCopy.coords.x = 3
objCopy.names.last[1] = 'b3'
console.log(obj)
console.log(objCopy)