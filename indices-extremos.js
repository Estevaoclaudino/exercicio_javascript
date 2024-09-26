// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

function encontrarIndicesExtremos(array) {
    if (array.length === 0) {
      return { maior: -1, menor: -1 };
    }
  
    let maiorValor = array[0];
    let menorValor = array[0];
    let indiceMaior = 0;
    let indiceMenor = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorValor) {
        maiorValor = array[i];
        indiceMaior = i;
      } else if (array[i] < menorValor) {
        menorValor = array[i];
        indiceMenor = i;
      }
    }
  
    return { maior: indiceMaior, menor: indiceMenor };
  }
  
  const meuArray = [9, 7, 2, 3, 5];
  const resultado = encontrarIndicesExtremos(meuArray);
  console.log("Índice do maior valor:", resultado.maior);
  console.log("Índice do menor valor:", resultado.menor);