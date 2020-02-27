const { log } = console;

const filter = (array, func) => {
  let res = [];
  array.forEach((item, index) => {
    if (func(item, index, array)) res.push(item);
  });
  return res;
};

log(filter([1, 2, 3], n => n > 1));
