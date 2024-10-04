const encontrarIndicesExtremos = require('./indices-extremos');

describe('Teste da função encontrarIndicesExtremos', () => {

  test('deve retornar o índice do maior e menor valor num array normal', () => {
    const resultado = encontrarIndicesExtremos([9, 7, 2, 3, 5]);
    expect(resultado).toEqual({ maior: 0, menor: 2 });
  });

  test('deve retornar -1 para ambos se o array estiver vazio', () => {
    const resultado = encontrarIndicesExtremos([]);
    expect(resultado).toEqual({ maior: -1, menor: -1 });
  });

  test('deve retornar 0 para maior e menor se o array tiver apenas um elemento', () => {
    const resultado = encontrarIndicesExtremos([5]);
    expect(resultado).toEqual({ maior: 0, menor: 0 });
  });

  test('deve lidar com um array em que todos os elementos são iguais', () => {
    const resultado = encontrarIndicesExtremos([4, 4, 4, 4]);
    expect(resultado).toEqual({ maior: 0, menor: 0 });
  });

  test('deve funcionar corretamente com valores negativos', () => {
    const resultado = encontrarIndicesExtremos([-10, -20, -30, -40]);
    expect(resultado).toEqual({ maior: 0, menor: 3 });
  });

});
