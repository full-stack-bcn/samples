
/* 

Escribe un programa que muestra las letras de:

  You should know that professor.
  You programmed me.

con una diferencia de 100 milisegundos entre letra y letra.
Para los saltos de línea, añade 700 milisegundos extra.

*/

const texto = `
You should know that, professor.
You programmed me.
`

const showChar = i => {
  process.stdout.write(WOPR[i])
  let delay = 100;
  if (WOPR[i] === '\n') {
    delay += 700;
  }
  setTimeout(() => {
    if (i + 1 < WOPR.length) {
      showChar(i + 1)
    }
  }, delay)
}

showChar(0)
