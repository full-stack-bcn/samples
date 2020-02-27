
const func = () => {
  console.log('this is the original func');
}

func();

// This produces a TypeError (assign to constant variable)
func = function () {
  console.log('ha ha, I changed the function!');
}


