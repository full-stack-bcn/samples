let progression = {
  begin: 5,
  step: 3,
  end: 25
};

progression[Symbol.iterator] = function() {
  // The progression is the 'this'
  let pos = this.begin;
  // This function has to return an iterator, with at least the 'next' method.
  return {
    next: () => {
      // Since this is an arrow function, we get the 'this' from outside!
      let result = { done: pos >= this.end };
      if (!result.done) {
        result.value = pos;
        pos += this.step;
      }
      return result;
    }
  };
};

for (let val of progression) {
  console.log(val);
}
