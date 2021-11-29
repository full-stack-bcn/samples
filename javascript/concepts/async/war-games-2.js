/* 

Escribe un programa que muestra las letras de:

  You should know that professor.
  You programmed me.

con una diferencia de 100 milisegundos entre letra y letra.
Para los saltos de línea, añade 700 milisegundos extra.

*/

const WOPR = `You should know that, professor.
You programmed me.
`;

const showChar = i => {
  process.stdout.write(WOPR[i]);
  let delay = 60 + (WOPR[i] === "\n" ? 700 : 0);
  if (i + 1 < WOPR.length) {
    setTimeout(() => showChar(i + 1), delay);
  }
};

showChar(0);
