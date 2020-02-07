
const pr = console.log
const process = require('process')

pr('begin')
process.nextTick(() => pr('nextTick'))
pr('end')