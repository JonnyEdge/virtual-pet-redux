const Pet = require('../src/pet-redux');

describe('constructor', () => {
  it('creates a Pet constructor', () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
});
