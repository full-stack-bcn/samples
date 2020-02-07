
const showMethods = (title, obj) => {
  const line = '-'.repeat(40 - title.length/2)
  console.log(`${line} ${title} ${line}`)
  console.log(Object.getOwnPropertyNames(obj))
  console.log()
}

showMethods('Array.prototype', Array.prototype)
showMethods('Array', Array)

showMethods('Object.prototype', Object.prototype)
showMethods('Object', Object)
