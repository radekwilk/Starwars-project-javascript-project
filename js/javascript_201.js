//  variable holding API request
 let jsondata;
//  variable holding selected option, people is default value
 let selectedOption  = 'people';
//  variable holding btn name based on selected option
 let selectedBtn;

//  variables holding field names
    // containers and button
const selectBtn = document.getElementById('select-btn');
const optionVal = document.getElementById('starwars');
const container = document.querySelector('.container');
const results = document.querySelector('.results');
const closingMenu = document.querySelector('.closing-menu');
const resultsHeading = document.getElementById('results-heading');
const resultsWrapper = document.querySelectorAll('.results-wrapper');

    // - for people
const pplName = document.getElementById('ppl-name');
const pplGender = document.getElementById('ppl-gender');
const pplBday = document.getElementById('ppl-bday');
const pplHeight = document.getElementById('ppl-height');
const pplHair = document.getElementById('ppl-hair');
const pplSkin = document.getElementById('ppl-skin');


    // - for planets
const planetName = document.getElementById('planet-name');
const planetPopulation = document.getElementById('planet-population');
const planetTerrain = document.getElementById('planet-terrain');
const planetClimate = document.getElementById('planet-climate');
const planetDiameter = document.getElementById('planet-diameter');
const planetGravity = document.getElementById('planet-gravity');
const planetRotation = document.getElementById('planet-rotation');
const planetOrbital = document.getElementById('planet-orbital');

// - for ships
const shipName = document.getElementById('ship-name');
const shipModel = document.getElementById('ship-model');
const shipClass = document.getElementById('ship-class');
const shipManufacturer = document.getElementById('ship-manufacturer');
const shipCrew = document.getElementById('ship-crew');
const shipPassengers = document.getElementById('ship-passengers');
const shipLength = document.getElementById('ship-length');
const shipCargo = document.getElementById('ship-cargo');

// - for species
const speciesName = document.getElementById('species-name');
const speciesClassification = document.getElementById('species-classification');
const speciesDesignation = document.getElementById('species-designation');
const speciesHeight = document.getElementById('species-height');
const speciesLifespan = document.getElementById('species-lifespan');
const speciesLanguage = document.getElementById('species-language');

// when we click select random
selectBtn.addEventListener('click', ()=> {
    // get value of selected option
    selectedOption = optionVal.value;
    // add .change class to main container, to show results section
    container.classList.add('change');
    // change results-heading according to selected option
    // dynamically selecting button based on selected option. It helps to use btn in results section
    selectedBtn = document.getElementById(`btn-${selectedOption}`);
    // and once clicked, randomly select correct data
    selectedBtn.addEventListener('click', ()=> {
        getData(selectedOption);
    });

    addClass(selectedOption);
    resultsHeading.innerText = `Randomly selected Star Wars ${setHeading(selectedOption)} is:`;
    getData(selectedOption);
});

// Closing results window when clicked on X and remove .show class for each results-wrapper element
closingMenu.addEventListener('click', ()=> {
    container.classList.remove('change');
    resultsWrapper.forEach(item => {
        item.classList.remove('show');
    });
});

// This function will dynamically add class .show to correct container
function addClass(option) {
    let myOption = document.querySelector(`.results-${option}`);
    myOption.classList.add('show');
}

// Function allocating data into selected field
function injectData(field, data) {
    setTimeout(() => {
        field.innerText = data;
    }, 2000);
    field.innerText = "Loading...";
}

function setHeading(headingText) {
    let headingTxt;
    if(headingText === 'people') {
        headingTxt = 'character';
    } else if (headingText === 'planets') {
        headingTxt = 'planet';
    } else if (headingText === 'starships') {
        headingTxt = 'warship';
    } else if (headingText === 'species') {
        headingTxt = 'species';
    }
    return headingTxt;
}

// Function generating random number based on option selected by user and then returning obj as a number
const getRandomNum = function (userOption) {
    let rndNum = 1;
    //   if people selected get random number 1-82
    if(userOption === 'people') {
        rndNum = Math.ceil(Math.random() * 82);
    //   if planets selected get random number 1-60
    } else if(userOption === 'planets') {
        rndNum = Math.ceil(Math.random() * 60);
    //   if starships selected get random number 1-75
    } else if(userOption === 'starships'){
        rndNum = Math.ceil(Math.random() * 75);
    //   if species selected get random number 1-37
    } else if(userOption === 'species'){
        rndNum = Math.ceil(Math.random() * 37);
    }
    // And then return object with random number and selected option
    const obj =  {
        'rndNum': rndNum,
        'selectOption': userOption
    };
    return obj;

}

// Function which will get API data
function getData(selected) {
    const newSelection = getRandomNum(selected);
    const selectedOption = newSelection['selectOption'];
    const newRndNum = newSelection['rndNum'];
    

    // Fetch function - it will retrieve JSON file and save entries into correct object
        // fetch(`https://akabab.github.io/starwars-api/api/id/1.json`)
    fetch(`https://swapi.dev/api/${selectedOption}/${newRndNum}/`)
    
    .then(
        function(u){ 
            return u.json();}
        )
    .then(
        function(json){
          jsondata = json;

        //   when user selects Star Wars character
          if(selectedOption === 'people') {
                // using injectData function to insert fetched API data
                injectData(pplName, jsondata['name']);
                injectData(pplGender, jsondata['gender']);
                injectData(pplBday, jsondata['birth_year']);
                injectData(pplHeight, jsondata['height']);
                injectData(pplHair, jsondata['hair_color']);
                injectData(pplSkin, jsondata['skin_color']);

          } else if(selectedOption === 'planets') { //   when user selects Star Wars planet
                // using injectData function to insert fetched API data
                injectData(planetName, jsondata['name']);
                injectData(planetPopulation, jsondata['population']);
                injectData(planetTerrain, jsondata['terrain']);
                injectData(planetClimate, jsondata['climate']);
                injectData(planetDiameter, jsondata['diameter']);
                injectData(planetGravity, jsondata['gravity']);
                injectData(planetRotation, jsondata['rotation_period']);
                injectData(planetOrbital, jsondata['orbital_period']);

          } else if(selectedOption === 'starships') { //   when user selects Star Wars ship
                // using injectData function to insert fetched API data
                injectData(shipName, jsondata['name']);
                injectData(shipModel, jsondata['model']);
                injectData(shipClass, jsondata['ship_class']);
                injectData(shipManufacturer, jsondata['manufacturer']);
                injectData(shipCrew, jsondata['crew']);
                injectData(shipPassengers, jsondata['passengers']);
                injectData(shipLength, jsondata['length']);
                injectData(shipCargo, jsondata['cargo_capacity']); 

          } else if(selectedOption === 'species') { //   when user selects species
                // using injectData function to insert fetched API data
                injectData(speciesName, jsondata['name']);
                injectData(speciesClassification, jsondata['classification']);
                injectData(speciesDesignation, jsondata['designation']);
                injectData(speciesHeight, jsondata['average_height']);
                injectData(speciesLifespan, jsondata['average_lifespan']);
                injectData(speciesLanguage, jsondata['language']);   
          }
                
        }
      )

}


