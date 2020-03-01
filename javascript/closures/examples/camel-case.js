// A function to convert to camelCase a name which is dash-separated
function camelCase(dashSeparated) {
  const firstUpper = s => s[0].toUpperCase() + s.slice(1)
  const [head, ...rest] = dashSeparated.split('-')
  return head + rest.map(firstUpper).join('')
}

console.log(camelCase('has-own-property'));