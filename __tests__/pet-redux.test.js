const Pet = require('../src/pet-redux');

describe('constructor', () => {
  it('creates a Pet constructor', () => {
    expect(new Pet()).toBeInstanceOf(Object);
  });
});

describe('name', () => {
  it('passes the name from the function into the Pet object', () => {
    const pet = new Pet('GhostfaceKilla');
    expect(pet.name).toEqual('GhostfaceKilla');
  });
});

describe('age', () => {
  it ('adds 1 to the default age of 0 every time it is called', () => {
    const pet = new Pet('OlDirtyBastard');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});
