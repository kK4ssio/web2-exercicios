//Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto.
//Homens ganham 5% de desconto.
//Mulheres ganham 13% de desconto.

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("qual seu nome? ", (nome) => {
  oi.question("qual seu sexo? ", (sexo) => {
    oi.question("valor em compras: ", (valor) => {
      if (sexo == "masculino") {
        let desc = Number(valor) * 0.05;
        let total = Number(valor) - Number(desc);
        console.log(
          `olá, ${nome}, você ganhou um desconto de 5% na sua compra de R$${valor}, e sua compra sairá por R$${total}.`
        );
      } else if (sexo == "feminino") {
        let desc = Number(valor) * 0.13;
        let total = Number(valor) - Number(desc);
        console.log(
          `olá, ${nome}, você ganhou um desconto de 5% na sua compra de R$${valor}, e sua compra sairá por R$${total}.`
        );
      }
      oi.close();
    });
  });
});
