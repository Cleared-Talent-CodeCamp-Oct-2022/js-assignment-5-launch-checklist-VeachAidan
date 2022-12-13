// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty"
   }else if(isNaN(testInput)){
    return "Not a Number"
   }else if(!isNaN(testInput)){
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let validPilot = validateInput(pilot);
   let validCopilot = validateInput(copilot);
   let validFuelLevel = validateInput(fuelLevel);
   let validCargoLevel = validateInput(cargoLevel);

   if(validPilot === "Empty" || validCopilot === "Empty" || validFuelLevel === "Empty" || validCargoLevel === "Empty"){
    alert("All fields are required");
   }else if(validPilot === "Is a Number" || validCopilot === "Is a Number" || validFuelLevel === "Not a Number" || validCargoLevel === "Not a Number"){
    alert("Information entered is not valid! Verify the correct information for each field!")
   }else{

   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let choice = Math.round(Math.random()*planets.length);
    return planets[choice];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
