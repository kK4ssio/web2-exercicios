//2. Faça um programa que leia o nome de uma pessoa e de boas vindas. ex.: “Olá, Lucas!”

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá, ${nome}!`);

  rl.close();
});
