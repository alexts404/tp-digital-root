const { TestScheduler } = require('jest');
const digitalRoots = require('./roots');

describe('Testing if the root of a two-digit number is returned', () => {
  test('Correctly returns root for small number', () => {
    expect(digitalRoots(16)).toBe(7);
  });
});
describe('Testing if correct root is returned from larger numbers', () => {
  test('Correctly returns root for slightly larger number', () => {
    expect(digitalRoots(942)).toBe(6);
  });
  test('Correctly returns root for large numbers', () => {
    expect(digitalRoots(132189)).toBe(6);
  });
  test('Correctly returns root for large numbers', () => {
    expect(digitalRoots(493193)).toBe(2);
  });
});