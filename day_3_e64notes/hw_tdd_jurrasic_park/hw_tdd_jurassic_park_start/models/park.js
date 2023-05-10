//Create Park blueprint


const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinos = []
};


Park.prototype.numOfDinos = function() {
    return this.collectionOfDinos.length
};

Park.prototype.addDinos = function(dinosaur) {
    this.collectionOfDinos.push(dinosaur)
};

Park.prototype.deleteDinosaurBySpecies = function(dinoToRemove) {
    const index = this.collectionOfDinos.indexOf(dinoToRemove)
    this.collectionOfDinos.splice(index, 1)
};

//example of a loop in JS
// const numbers = [1, 2, 3];
// for (const number of numbers) {
//   console.log(number);
// }

Park.prototype.highestAttractorDino = function(){
    let highestAttractor = 0 //guest per day counter, starts at 0
    let highestAttractorDino = null //make the dinosaur null for now

    for (const dinosaur of this.collectionOfDinos){
        if (dinosaur.guestsAttractedPerDay > highestAttractor) {   //checking the guests attracted by dino per day against the counter
            highestAttractor =dinosaur.guestsAttractedPerDay  //need to update the guest per day counter
            highestAttractorDino = dinosaur //the new highest attractor
        }
    } 
    return highestAttractorDino
};

Park.prototype.selectAllBySpecies = function(species) {
    let listOfDinosBySpecies = []
    for (dinosaur of this.collectionOfDinos) {
        //console.log("after for", dinosaur.species)
        if (dinosaur.species === species) {
            listOfDinosBySpecies.push(dinosaur)
            //console.log("Species after if", dinosaur.species)
        }
    }
    //console.log(listOfDinosBySpecies)
    return listOfDinosBySpecies
};

Park.prototype.totalVisitorsPerDay = function(){
    let visitorCount = 0
    for (dinosaur of this.collectionOfDinos) {
        visitorCount += dinosaur.guestsAttractedPerDay
    }
    return visitorCount
};

Park.prototype.revenuePerYear = function(){
    let visitorCount = 0
    for (dinosaur of this.collectionOfDinos) {
        visitorCount += dinosaur.guestsAttractedPerDay
    }
    revenuePerYear = visitorCount*365*(this.ticketPrice)
    return revenuePerYear
};


//don't need delete all!
// Park.prototype.deleteAllDinosaurs = function () {
//     this.collectionOfDinos = []
// }

module.exports = Park;