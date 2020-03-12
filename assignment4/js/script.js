"use strict";

/********************************************************************

Assingment 4
Jade Dufour

*********************************************************************/


$(document).ready(setup);

function setup() {
  $.getJSON("assets/data/data.json")
    .done(dataLoaded) // Call dataLoaded on successful load
    .fail(dataNotLoaded); // Call dataNotLoaded on failed load

}


function dataLoaded(data) {
  data = data;
  console.log(data);
// Get the random element from the condiment array
  let randomCondiment = getRandomElement(data.condiments);
  console.log(randomCondiment);
// make sure the verb is correct
  let verb = "is";
  if(randomCondiment.charAt(randomCondiment.length - 1) === "s"){
    verb= "are";

  }
  console.log(verb);
// Get the random element from the cats array
  let randomCat = getRandomElement(data.cats);
  console.log(randomCat);
// Get the random element from the rooms array
  let randomRoom = getRandomElement(data.rooms);
  console.log(randomRoom);

  // Get the random element from the encouraging words array
    let encouragingWords = getRandomElement(data.encouraging_words);
    console.log(encouragingWords);

    // Get the random element from the encouraging words array
      let celebrityName = getRandomElement(data.celebrities);
      console.log(celebrityName);


// print the whole description
  let randomDescription = `Just like ${celebrityName} used to say: "${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom} ." How ${encouragingWords}!`;
  console.log(randomDescription);



  // let firstShadowMeaning = tarot.tarot_interpretations[4].meanings.shadow[4];
  // console.log(firstShadowMeaning);



  // dynamically change the css properties
  $("body").append(`<p>${randomDescription}</p>`);
}

function dataNotLoaded(jqxhr, textStatus, error) {
  console.error(error);
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
