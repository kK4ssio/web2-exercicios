//4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Escreva um numero: ", (n1) => {
  r1.question("escreva outro numero: ", (n2) => {
    let res = Number(n1) + Number(n2);

    console.log(`A soma de ${n1} e ${n2} é: ${res}!`);
    r1.close();
  });
});
