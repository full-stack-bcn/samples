/* 

Escribe un programa que muestra las palabras:

"You " "should " "know " "that " "professor.\n"
"You " "programmed " "me "

con una diferencia de 500 medio segundo entre ellas

*/

const WOPR = ["You should know that, professor\n", "You programmed me.\n"];

const showLine = line => {
  [...line].forEach((c, i) => {
    setTimeout(() => process.stdout.write(c), 100 * i);
  });
};

WOPR.forEach((line, i, lines) => {
  setTimeout(
    () => showLine(line),
    i === 0 ? 0 : lines[i - 1].length * 100 + 700
  );
});
