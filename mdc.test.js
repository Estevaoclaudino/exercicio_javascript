const mdc = require('./mdc');
describe('Teste da função mdc', () => {
  test('deve calcular o MDC de 18 e 46 corretamente', () => {
    const resultado = mdc(18, 46);
    expect(resultado).toBe(2);
  });

  test('deve calcular o MDC de 10 e 10', () => {
    const resultado = mdc(10, 10);
    expect(resultado).toBe(10);
  });

  test('deve calcular o MDC de 15 e 0', () => {
    const resultado = mdc(15, 0);
    expect(resultado).toBe(15);
  });

  test('deve calcular o MDC de 0 e 20', () => {
    const resultado = mdc(0, 20);
    expect(resultado).toBe(20);
  });

  test('deve calcular o MDC de dois números primos entre si (7 e 13)', () => {
    const resultado = mdc(7, 13);
    expect(resultado).toBe(1);
  });

  test('deve calcular o MDC de números grandes (252 e 105)', () => {
    const resultado = mdc(252, 105);
    expect(resultado).toBe(21);
  });
});
