const Pet = require('./pet.js')
const Person = require('./person.js')

// stuff from pet 
const scooby = new Pet("Scooby Doo", "Great Dane")
const poppy = new Pet("Poppy Rose", "Labrador")
// scooby.eat('carrots')

// stuff from person
const shaggy = new Person("Shaggy", 32, scooby)
// shaggy.greet()
// console.log(shaggy) // --> output Person {}

const becky = new Person ("Becky", 31, poppy)
// velma.greet()
// console.log(velma)

// console.log(Object.getPrototypeOf(shaggy))

// Assign a pet property in the Person constructor via a parameter
// Add a feedPet method to Person.prototype which:
// Accepts a food parameter
// Outputs a string containing the person and pet's names and the food. For example: 'Shaggy Rogers fed Scooby Doo a Scooby Snack'
// Invokes the pet's eat method and passes the food to it

becky.feedPet("liver cake")