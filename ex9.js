//9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva quantos dias trabalhou no mês: ", (dias) => {
  let hr = dias * 8;
  let sal = hr * 25;

  console.log(`você trabalhou ${dias} no último mês, deverá receber R$${sal}`);
  rl.close();
});
