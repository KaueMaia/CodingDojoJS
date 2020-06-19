// Aqui importamos nossa função
const certo = require('./problema');


// Nossos testes aqui em baixo:
test('certo retorna true', () => {
  expect(certo()).toBe(true);
});