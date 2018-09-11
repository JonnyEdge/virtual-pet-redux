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

describe('growUp', () => {
  it('adds 1 to the initial age of 0 every time it is called', () => {
    const pet = new Pet('OlDirtyBastard');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it('adds 5 to the initial hunger level of 0 every time it is called', () => {
    const pet = new Pet('RZA');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it('subtracts 3 from the initial fitness level of 10 every time it is called', () => {
    const pet = new Pet('MethodMan');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('adds 4 to the fitness level, to a level cap of 10 - starting fitness 10', () => {
    const pet = new Pet('Raekwon');
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('adds 4 to the fitness level, to a level cap of 10 - starting fitness 7', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('adds 4 to the fitness level, to a level cap of 10 - starting fitness 4', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});
