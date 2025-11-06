const { add, subtract } = require('../src/math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

// New tests to ensure arguments are numbers
test('add throws an error when arguments are not numbers', () => {
  expect(() => add('a', 2)).toThrow('Arguments must be numbers');
  expect(() => add(1, 'b')).toThrow('Arguments must be numbers');
  expect(() => add(null, undefined)).toThrow('Arguments must be numbers');
  expect(() => add({}, 3)).toThrow('Arguments must be numbers');
});
test('subtract throws an error when arguments are not numbers', () => {
  expect(() => subtract('a', 2)).toThrow('Arguments must be numbers');
  expect(() => subtract(1, 'b')).toThrow('Arguments must be numbers');
  expect(() => subtract({}, [])).toThrow('Arguments must be numbers');
});