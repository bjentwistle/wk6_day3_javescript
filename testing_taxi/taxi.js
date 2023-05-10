//Create a constructor for taxi

const Taxi = function(manufacturer, model, driver) {
    this.manufacturer = manufacturer
    this.model = model
    this.driver = driver
    this.passengers = [] //empty seats
}

module.exports = Taxi;