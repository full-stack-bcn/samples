function f1(a) {
  console.log(`f1(${a})`);
}

function f2(a, b) {
  console.log(`f2(${a}, ${b})`);
}

function f3(a, b, c) {
  console.log(`f3(${a}, ${b}, ${c})`);
}

f1(); // too few
f1(5);
f1("a", "b"); // too many
f1(0, -1, true); // too many

f2(); // too few
f2(10); // too few
f2(0.1, false);
f2(-1, true, -3); // too many
f2("a", "b", "c", "d"); // too many

f3(); // too few
f3(1); // too few
f3(0, true); // too few
f3(-1, -2, -3); 
f3("a", false, "c", 1); // too many