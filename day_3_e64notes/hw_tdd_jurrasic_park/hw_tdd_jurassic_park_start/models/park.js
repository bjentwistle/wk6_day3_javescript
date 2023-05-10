//Create Park blueprint

const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinos = []
};

//["T-Rex", "Ankylosaurus", "Stegasaurus"]

module.exports = Park;