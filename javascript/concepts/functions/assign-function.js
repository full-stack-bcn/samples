
function func() {
  console.log('this is the original func');
}

func();

func = function () {
  console.log('ha ha, I changed the function!');
}

func();

