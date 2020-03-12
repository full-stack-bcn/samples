const f = () => {
  console.log(a);
};

try {
  f();
} catch (e) {
  console.log("Oops... an error has ocurred:");
  console.log(`- Name:    "${e.name}"`);
  console.log(`- Message: "${e.message}"`);
}
