
const pr = console.log

pr('begin')
setImmediate(() => pr('setImmediate'), 0)
pr('finished')