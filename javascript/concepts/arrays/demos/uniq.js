const { log } = console;

const uniq = array =>
  array.reduce((res, item) => {
    if (res.length == 0 || item !== res[res.length - 1]) {
      return [...res, item];
    } else {
      return res;
    }
  }, []);

log(uniq([1, 1, 2, 2, 2, 2, 2, 3, 3, 1]));
