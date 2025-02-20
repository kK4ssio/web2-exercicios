//2. Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("digite um ano: ", (ano) => {
  if (ano % 4 == 0) {
    console.log("esse ano é bissexto");
  } else {
    console.log("esse ano não é bissexto");
  }

  oi.close();
});
