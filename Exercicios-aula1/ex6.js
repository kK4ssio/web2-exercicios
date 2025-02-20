//6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Escreva um numero: ", (n1) => {
  let res = Number(n1);
  let su = res + 1;
  let ant = res - 1;

  console.log(
    `O numero digitado é ${n1}, seu sucessor é ${su}, e o antecessor é ${ant}.`
  );
  r1.close();
});
