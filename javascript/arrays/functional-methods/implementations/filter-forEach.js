// 'filter' implemented using 'forEach'

const filter = (array, func) => {
  let res = [];
  array.forEach((item, index) => {
    if (func(item, index, array)) {
      res.push(item);
    }
  });
  return res;
};

console.log(filter([1, 2, 3], n => n > 1));
