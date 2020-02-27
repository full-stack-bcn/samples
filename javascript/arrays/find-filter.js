const { log } = console;

const find = (array, func) => {
  let res = array.filter(func);
  return res.length > 0 ? res[0] : undefined;
};

log([1, 2, 3].find(x => x === 2));
log(find([1, 2, 3], x => x === 2));
