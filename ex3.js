//3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {
  rl.question("Qual é o seu salário? ", (sal) => {
    console.log(`Olá, ${nome}, seu salário é: R$${sal}`);
    rl.close();
  });
});
