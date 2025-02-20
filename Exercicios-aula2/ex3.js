//3. Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
// Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
// Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("quantos anos vc tem?? ", (idade) => {
  if (idade < 18) {
    let f1 = 18 - Number(idade);

    console.log(
      `você tem ${idade} anos, faltam ${f1} anos para o alistamento.`
    );
  } else if (idade > 18) {
    let f1 = Number(idade) - 18;
    console.log(
      `você tem ${idade} anos, e já se passaram ${f1} anos do alistamento `
    );
  }

  oi.close();
});
