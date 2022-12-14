// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML =
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
};

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty"
   }else if(isNaN(testInput)){
    return "Not a Number"
   }else if(!(isNaN(testInput))){
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelNum = Number(fuelLevel);
    let cargoNum = Number(cargoLevel);
   let validPilot = validateInput(pilot);
   let validCopilot = validateInput(copilot);
   let validFuelLevel = validateInput(fuelNum);
   let validCargoLevel = validateInput(cargoNum);

    let docPilot = document.getElementById("pilotStatus");
    let docCopilot = document.getElementById("copilotStatus");
    let docFuel = document.getElementById("fuelStatus");
    let docCargo = document.getElementById("cargoStatus");

   if(validPilot === "Empty" || validCopilot === "Empty" || validFuelLevel === "Empty" || validCargoLevel === "Empty"){
    alert("All fields are required");
   }else if(validPilot === "Is a Number"){
    alert("Pilot entered is not valid! Verify the correct information for each field!")
   }else if(validCopilot === "Is a Number"){
    alert("Copilot entered is not valid! Verify the correct information for each field!")
   }else if(validFuelLevel === "Not a Number"){
    alert("Fuel level entered is not valid! Verify the correct information for each field!")
   }else if(validCargoLevel === "Not a Number"){
    alert("Cargo mass entered is not valid! Verify the correct information for each field!")
   }else{
    document.getElementById("launchStatus").style.color = "red"
    document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch!"
    list.style.visibility = "visible"
    docPilot.innerHTML = `${pilot}(pilot) ready!`
    docCopilot.innerHTML = `${copilot}(copilot) ready!`
    if(fuelNum <= 10000 && cargoNum >= 10000){
        docFuel.innerHTML = `Fuel below minimum limits - ${fuelNum}/10000`
        docCargo.innerHTML = `Cargo mass above maximum limits - ${cargoNum}/10000`
    }else if(fuelNum <= 10000 && cargoNum < 10000){
        docFuel.innerHTML = `Fuel below minimum limits - ${fuelNum}/10000`
        docCargo.innerHTML = `Cargo mass acceptable - ${cargoNum}/10000`
    }else if(fuelNum > 10000 && cargoNum >= 10000){
        docFuel.innerHTML = `Fuel level acceptable - ${fuelNum}/10000`
        docCargo.innerHTML = `Cargo mass above maximum limits - ${cargoNum}/10000`
    }else{
        document.getElementById("launchStatus").style.color = "green"
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!"
        docFuel.innerHTML = `Fuel level acceptable - ${fuelNum}/10000`
        docCargo.innerHTML = `Cargo mass acceptable - ${cargoNum}/10000`
    }
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
