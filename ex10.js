//10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu salário: ", (sal) => {
  let au = Number(sal) * 0.15;
  let total = Number(sal) + Number(au);

  console.log(
    `seu salário atual é R$${sal}, com o aumento de 15%, deverá receber R$${total} daqui em diante`
  );

  rl.close();
});
