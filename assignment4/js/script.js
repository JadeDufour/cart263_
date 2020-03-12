"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


$(document).ready(setup);

function setup() {
  $.getJSON("assets/data/data.json")
    .done(dataLoaded) // Call dataLoaded on successful load
    .fail(dataNotLoaded); // Call dataNotLoaded on failed load


  $.getJSON("assets/data/data.json")
    .done(dataLoaded) // Call dataLoaded on successful load
    .fail(dataNotLoaded); // Call dataNotLoaded on failed load
}


function dataLoaded(data) {
  data = data;
  console.log(data);

  let randomCondiment = getRandomElement(data.condiments);
  console.log(randomCondiment);

  let verb = "is";
  if(randomCondiment.charAt(randomCondiment.length - 1) === "s"){
    verb= "are";

  }
  console.log(verb);

  let randomCat = getRandomElement(data.cats);
  console.log(randomCat);

  let randomRoom = getRandomElement(data.rooms);
  console.log(randomRoom);

  let randomDescription = `${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom}.`;
  console.log(randomDescription);
  // let firstShadowMeaning = tarot.tarot_interpretations[4].meanings.shadow[4];
  // console.log(firstShadowMeaning);
  $("body").append(`<p>${randomDescription}</p>`);
}

function dataNotLoaded(jqxhr, textStatus, error) {
  console.error(error);
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
