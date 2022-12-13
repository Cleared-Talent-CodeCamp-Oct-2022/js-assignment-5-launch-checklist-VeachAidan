// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let choice = pickPlanet(listedPlanets);
       addDestinationInfo(document, choice.name, choice.diameter, choice.star, choice.distance, choice.moons, choice.image);
   })
   
   let form = document.getElementById("launchForm");

   form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotInput = document.getElementById("pilotName");
    let copilotInput = document.getElementsByName("copilotName");
    let fuelLevelInput = document.getElementsByName("fuelLevel");
    let cargoMassInput = document.getElementsByName("cargoMass");
    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value);
   })
});

