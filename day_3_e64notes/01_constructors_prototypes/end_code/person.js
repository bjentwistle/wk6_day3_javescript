const Person = function (name, age, pet) {
  this.name = name
  this.age = age
  this.noOfLegs = 2
  this.pet = pet
}

Person.prototype.greet = function () {
  console.log(`Hi! My name is ${this.name}`)
}

Person.prototype.feedPet = function (food) {
  console.log(`${this.name} fed ${this.pet.name} ${food}`)
  this.pet.eat(food)
}

module.exports = Person