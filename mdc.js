// Calcule o MDC (máximo divisor comum) entre dois números.

function mdc(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

const num1 = 18;
const num2 = 46;

const resultado = mdc(num1, num2);
console.log(`O MDC de ${num1} e ${num2} é: ${resultado}`);