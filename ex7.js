//7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Escreva seu dinheiro na carteira: ", (real) => {
  let dolar = Number(real) * 0.17;

  console.log(` com R$${real} reais, você pode comprar R$${dolar} dolares.`);
  r1.close();
});
