//8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Escreva a altura da parede: ", (alt) => {
  r1.question("escreva a largura da parede: ", (larg) => {
    let area = Number(alt) * Number(larg);
    let lit = area / 2;

    console.log(
      `A área da parede é: ${area}m², e você precisará de ${lit} litros de tinta`
    );
    r1.close();
  });
});
