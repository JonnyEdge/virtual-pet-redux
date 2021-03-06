const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const DEADPET_MESSAGE = 'Your pet is dead';

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype = {
  get isAlive() {
    return ((this.fitness > 0) && (this.hunger < 10) && (this.age < 30));
  },
};

Pet.prototype.growUp = function growUp() {
  if (!this.isAlive) throw DEADPET_MESSAGE;
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function walk() {
  if (!this.isAlive) throw DEADPET_MESSAGE;
  this.fitness += 4;
  if (this.fitness > MAXIMUM_FITNESS) {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function feed() {
  if (!this.isAlive) throw DEADPET_MESSAGE;
  this.hunger -= 3;
  if (this.hunger < MINIMUM_HUNGER) {
    this.hunger = MINIMUM_HUNGER;
  }
};

Pet.prototype.checkUp = function checkUp() {
  if (!this.isAlive) return 'Your pet is dead';
  if ((this.fitness > 3) && (this.hunger < 5)) return 'I am just fine';
  if ((this.fitness <= 3) && (this.hunger >= 5)) return 'I am hungry and need a walk';
  if (this.fitness <= 3) return 'I need a walk';
  if (this.hunger >= 5) return 'I am hungry';
};

module.exports = Pet;
