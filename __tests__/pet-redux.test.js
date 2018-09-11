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
  it('adds 4 to the fitness level, to a maximum of 10 - starting fitness 10', () => {
    const pet = new Pet('Raekwon');
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('adds 4 to the fitness level, to a maximum of 10 - starting fitness 7', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('adds 4 to the fitness level, to a maximum of 10 - starting fitness 4', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.growUp();
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});

describe('feed', () => {
  it('subtracts 3 from the hunger level, to a minimum of 0 - starting hunger 0', () => {
    const pet = new Pet('Raekwon');
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('subtracts 3 from the hunger level, to a minimum of 0 - starting hunger 5', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });
  it('subtracts 3 from the hunger level, to a minimum of 0 - starting hunger 10', () => {
    const pet = new Pet('GZA');
    pet.growUp();
    pet.growUp();
    pet.feed();
    expect(pet.hunger).toEqual(7);
  });
});

describe('checkUp', () => {
  it('returns need walk message when pet fitness is 3 or less', () => {
    const pet = new Pet('Redman');
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it('returns am hungry message when pet hunger is 5 or more', () => {
    const pet = new Pet('DMX');
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });
  it('returns am hungry and need walk messages when pet hunger is 5 or more and fitness is 3 or less', () => {
    const pet = new Pet('Fabolous');
    pet.hunger = 5;
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I am hungry and need a walk');
  });
  it('returns am fine message when pet hunger is less than 5 and fitness is 4 or more', () => {
    const pet = new Pet('JaRule');
    pet.hunger = 4;
    pet.fitness = 6;
    expect(pet.checkUp()).toEqual('I am just fine');
  });
});
