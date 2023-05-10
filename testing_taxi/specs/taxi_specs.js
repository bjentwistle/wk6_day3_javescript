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
        const actual = taxi.driver
        assert.strictEqual(actual, "Becky")
    })

    describe('passengers', function(){
        it('should start with no passengers', function(){
            const actual = taxi.passengers;
            assert.deepStrictEqual(actual, []) //not exact same thing because of memory hence use deepStrictEqual
        })

    })

});
