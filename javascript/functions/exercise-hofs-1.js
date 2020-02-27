const L = console.log;
const multiplyBy = n => x => x * n;

L([1, 2, 3].map(multiplyBy(2)));

// map
// filter
// reduce
// find

const between = (a, b) => x => a < x && x < b;

L([1, 2, 3, 4, 5].find(between(1, 3)));
L([0.6, 0.7, 0.8, 0.9, 1.0].filter(between(0.75, 1.0)));

const clamper = (a, b) => x => {
  if (x < a) {
    return a;
  } else if (x > b) {
    return b;
  } else {
    return x;
  }
};

L([-1, 3, -2, 7, 1].map(clamper(0, 5)));
