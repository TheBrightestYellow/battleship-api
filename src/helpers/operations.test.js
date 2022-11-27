const { operations } = require('./operations.js');

describe('math operations', () => {
  test('it should sum two numbers', () => {
    expect(operations.sum(1, 4)).toEqual(5);
  });

  test('it should multiply two numbers', () => {
    expect(operations.multiply(2, 4)).toEqual(8);
  });
});
