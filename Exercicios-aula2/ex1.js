//1. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado e exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("qual foi a velocidade que o veiculo passou?", (vel) => {
  if (vel > 80) {
    let multa = Number(vel) - 80;
    let final = Number(multa) * 5;

    console.log(
      `o veiculo passou a ${vel}Km/h, o valor da multa será de R$${final} `
    );
  } else {
    console.log(`o veiculo passou na velocidade permitida, pode passar`);
  }

  oi.close();
});
