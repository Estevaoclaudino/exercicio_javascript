// Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

function somaMultiplos(limite, divisores) {
  let soma = 0;

  for (let i = 0; i < limite; i++) {
    if (divisores.some(divisor => i % divisor === 0)) {
      soma += i;
    }
  }

  return soma;
}

const limite = 1000;
const divisores = [5, 7];
const resultado = somaMultiplos(limite, divisores);

console.log("A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:", resultado);

  module.exports = somaMultiplos;