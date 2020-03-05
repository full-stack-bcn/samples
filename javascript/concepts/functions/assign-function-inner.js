function func() {
  console.log("this is the original func");
}

function main() {
  let line = '-'.repeat(50);
  console.log(`${line}\nEntering main function`);
  func();
  console.log(`Finishing main function\n${line}`);
}

main();

func = function() {
  console.log("HA HA, I CHANGED THE FUNCTION!");
};

main();
