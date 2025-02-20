//[DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
//Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("digite o comprimento de uma reta: ", (r1) => {
  oi.question("digite o comprimento de outra reta: ", (r2) => {
    oi.question("digite o comprimento de mais uma reta: ", (r3) => {
      let c1 = Number(r1) + Number(r3);
      let c2 = Number(r2) + Number(r3);
      let c3 = Number(r1) + Number(r2);

      if (r1 < c2 && r2 < c1 && r3 < c3) {
        console.log(`é um triangulo`);
      } else {
        console.log(`não é um triangulo`);
      }

      oi.close();
    });
  });
});
