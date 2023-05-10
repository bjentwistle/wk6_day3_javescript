//Create a constructor for taxi

const Taxi = function(manufacturer, model, driver) {
    this.manufacturer = manufacturer
    this.model = model
    this.driver = driver
    this.passengers = [] //empty seats
}
Taxi.prototype.numOfPassengers = function() {  // create a method to get the length of the passengers array
    return this.passengers.length;
}
Taxi.prototype.addPassengers = function(passenger) {
    this.passengers.push(passenger);
}

Taxi.prototype.removePassengersByName = function(passenger) {
    const index = this.passengers.indexOf(passenger)
    this.passengers.splice(index, 1);
}

Taxi.prototype.removeAllPassengers = function() {
    this.passengers = []
}

// removePassengerByName
// removeAllPassengers
// A passenger should be represented as a String containing the passenger's name.

module.exports = Taxi;