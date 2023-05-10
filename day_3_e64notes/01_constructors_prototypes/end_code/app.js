const Pet = require('./pet.js')
const Person = require('./person.js')

const scooby = new Pet("Scooby", "dog")
const shaggy = new Person("Shaggy", 32, scooby)
shaggy.greet()

shaggy.feedPet("Pizza")
