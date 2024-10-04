const somaMultiplos = require('./soma-multiplos');

describe('Teste da função somaMultiplos', () => {
  test('deve calcular a soma dos múltiplos de 5 ou 7 abaixo de 1000', () => {       
    const resultado = somaMultiplos(1000, [5, 7]);
    expect(resultado).toBe(156361);
  });
  
  test('deve calcular a soma dos múltiplos de 3 ou 5 abaixo de 10', () => {
    const resultado = somaMultiplos(10, [3, 5]);
    expect(resultado).toBe(23);
  });

  test('deve retornar 0 se o limite for 0', () => {
    const resultado = somaMultiplos(0, [3, 5]);
    expect(resultado).toBe(0);
  });
  
  test('deve calcular a soma dos múltiplos de 2 abaixo de 20', () => {
    const resultado = somaMultiplos(20, [2]);
    expect(resultado).toBe(90);
  });

  test('deve retornar 0 se não houver divisores', () => {
    const resultado = somaMultiplos(100, []);
    expect(resultado).toBe(0);
  });
});
