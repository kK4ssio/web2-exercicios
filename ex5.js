//5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Escreva a primeira nota: ", (nota1) => {
  r1.question("escreva a segunda nota: ", (nota2) => {
    let soma = Number(nota1) + Number(nota2);
    let res = soma / 2;

    console.log(`A sua média é: ${res}`);
    r1.close();
  });
});
