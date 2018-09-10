function Pet(name) {
  this.name = name;
  this.age = 0;
}

Pet.prototype.growUp = function growUp() {
  this.age += 1;
};

module.exports = Pet;
