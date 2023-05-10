const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 500, ["T-Rex", "Ankylosaurus", "Stegasaurus"]);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function() {
  const actual = park.ticketPrice;
  assert.strictEqual(actual, 500)
});
  describe('Dinosaur', function(){
    let dinosaur

  })
  it('should have a collection of dinosaurs', function() {
    dinosaur = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur)
    dinosaur = new Dinosaur("Triceratops", "Herbivore", 40)
    park.addDinos(dinosaur)
    dinosaur = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur)
    const actual = park.numOfDinos()
    assert.strictEqual(actual, 3)
  });

    it('should be able to add a dinosaur to its collection', function(){
      dinosaur = new Dinosaur("Stegosaurus", "Herbivore", 25)
      park.addDinos(dinosaur)
      const actual = park.numOfDinos()
      assert.strictEqual(actual, 1)
    });

    it('should be able to remove a dinosaur from its collection', function() {
      dinosaur1 = new Dinosaur("T-Rex", "Carnivore", 50)
      park.addDinos(dinosaur1)
      dinosaur2 = new Dinosaur("Triceratops", "Herbivore", 40)
      park.addDinos(dinosaur2)
      park.deleteDinosaurBySpecies(dinosaur1);
      const actual = park.numOfDinos()
      assert.strictEqual(actual, 1)
    });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    dinosaur = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur)
    dinosaur1 = new Dinosaur("Triceratops", "Herbivore", 40)
    park.addDinos(dinosaur1)
    dinosaur2 = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur2)
    const actual = park.highestAttractorDino()
    assert.strictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    dinosaur0 = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur0)
    dinosaur1 = new Dinosaur("T-Rex", "Carnivore", 10)
    park.addDinos(dinosaur1)
    dinosaur2 = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur2)
    const actual = park.selectAllBySpecies("T-Rex")
    assert.deepStrictEqual(actual, [dinosaur0, dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    dinosaur = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur)
    dinosaur1 = new Dinosaur("Triceratops", "Herbivore", 40)
    park.addDinos(dinosaur1)
    dinosaur2 = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur2)
    const actual = park.totalVisitorsPerDay()
    assert.strictEqual(actual, 120)

  });

  it('should be able to calculate the total number of visitors per year', function(){
    dinosaur = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur)
    dinosaur1 = new Dinosaur("Triceratops", "Herbivore", 40)
    park.addDinos(dinosaur1)
    dinosaur2 = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur2)
    const dailyTotal = park.totalVisitorsPerDay()
    const actual = (dailyTotal*365)
    assert.strictEqual(actual, 43800)
    });

  it('should be able to calculate total revenue for one year', function(){
    dinosaur = new Dinosaur("T-Rex", "Carnivore", 50)
    park.addDinos(dinosaur)
    dinosaur1 = new Dinosaur("Triceratops", "Herbivore", 40)
    park.addDinos(dinosaur1)
    dinosaur2 = new Dinosaur("Ankylosaurus", "Herbivore", 30)
    park.addDinos(dinosaur2)
    const actual = park.revenuePerYear()
    assert.strictEqual(actual, 21900000)
})
});