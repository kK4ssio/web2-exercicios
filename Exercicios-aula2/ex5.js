//Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas

const readline = require("readline");

const oi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

oi.question("qual a distância, em Km, da sua viagem? ", (km) => {
  if (km <= 200) {
    let valor = Number(km) * 0.5;

    console.log(`sua viagem de ${km}Km custará R$${valor}. `);
  } else if (km > 200) {
    let valor = Number(km) * 0.45;

    console.log(`sua viagem de ${km}Km custará R$${valor}.`);
  }

  oi.close();
});
