const assert = require('assert');
const Taxi = require('../taxi.js')

describe('Taxi', function() {  //grouping in describe
    let taxi;

    this.beforeEach(function(){

        taxi = new Taxi("Ford", "Focus", "Becky") //Arrange
    })

    it('should have a manufacturer', function(){  //mocha function that behavioural driven development
        const actual = taxi.manufacturer //Actual
        assert.strictEqual(actual, "Ford") //Assert actual and expected
    })

    it('should have a model', function(){
    
        const actual = taxi.model //Actual
        assert.strictEqual(actual, "Focus") //Assert actual and expected
    })

    it('should have a driver', function(){
        const actual = taxi.driver //actual
        assert.strictEqual(actual, "Becky")  //assert 
    })

    describe('passengers', function(){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;  //actual
            assert.deepStrictEqual(actual, []) //not exact same thing because of memory hence use deepStrictEqual
        })
        it('should be able to return number of passengers', function() {
            const actual = taxi.numOfPassengers()  //actual
            assert.strictEqual(actual, 0)  //strict equal as zero is zero
        })

        it('should be able to add a passenger', function(){
            taxi.addPassengers("Charlie")  //need to create a function to add passenger
            const actual = taxi.numOfPassengers() //actual now we have added Charlie
            assert.deepStrictEqual(actual, 1)
        })

        it('should be able to remove passengers', function(){
            taxi.addPassengers("Charlie")  
            taxi.removePassengersByName("Charlie")
            const actual = taxi.numOfPassengers() //actual now we have added Charlie
            assert.deepStrictEqual(actual, 0)
        })
        it('should be able to remove all passengers', function() {
            taxi.removeAllPassengers()
            const actual = taxi.numOfPassengers()
            assert.strictEqual(actual, 0)
        })

    })

});
