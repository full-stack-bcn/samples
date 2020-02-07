
const { log } = console;

const count = (array, func) => array.filter(func).length;

const singles = (array) => 
   array.filter((item, _, array) => array.filter(x => x === item).length === 1)

log(singles([1, 1, 2, 3, 3, 4, 5, 6, 6]));
