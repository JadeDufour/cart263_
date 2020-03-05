"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

**Every 'friendly' thumbnails come from verified (certified) youtube channels (Nick Jr, Peppa Pig Official, Little Angel, Masha ans The Bear, Toddler Fun Learning, DC SuperHero Girls)**

*********************************************************************/
// Both boxes that will display the right and wrong images
let $leftChoice;
let $rightChoice;
//each wrong guess gives more money to evil companies
let money = 0;

// the overlay div that displays the initial instuctions
let homeScreenFont;

//An array of wierd clickbait thumbnails found online
let clickbait = [
  "no1.jpg",
  "no2.jpg",
  "no3.jpg",
  "no4.jpg",
  "no5.jpg",
  "no6.jpg",
  "no7.jpg",
  "no8.jpg",
  "no9.jpg",
  "no10.jpg",
  "no11.jpg"

]

//an array of actual thumbnails that are kids friendly, found on certified Youtube accounts
let friendly = [
  "yes1.jpg",
  "yes2.jpg",
  "yes3.jpg",
  "yes4.jpg",
  "yes5.jpg",
  "yes6.jpg",
  "yes8.jpg",
  "yes9.jpg",
  "yes10.jpg",
  "yes11.jpg"
]
//
// let currentFriendly = '';
// let currentClickbait = '';


$(document).ready(setup);



function setup() {

  $leftChoice = $('#left');
  $rightChoice = $('#right');

  //for a new round to begin
  newRound();
  if (annyang) {


    var commands = {
      // To hide the overlay div
      // "start the day": off,
      // The next two commands are to handle the guesses depending on the div chosen (the left one or the right one)
      // "I think it is number one": handleVoiceGuess1,
      // "I think it is number two": handleVoiceGuess2,
      "*text": function (text) { console.log(text); }

    };

    $leftChoice.on('click',handleVoiceGuess1);
    $rightChoice.on('click',handleVoiceGuess2);

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
}



// Display the time
// Got the code from : https://stackoverflow.com/questions/10931197/make-a-live-clock-with-existing-time-in-div-with-javascript
setInterval(function(){
    document.getElementById("calendar").innerHTML = (new Date()).toLocaleTimeString();
}, 1000);


//To make the intro screen disapear
function off() {

  document.getElementById("homescreen").style.display = "none";

  setTimeout(tellInstructions, 200);

}

function tellInstructions(){
  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
  responsiveVoice.speak("Refer to the instructions in the green box if you can't remember how to teach the AI ", 'UK English Male', options);
}

// If the player guessed that the clickbait image was in the left div
function handleVoiceGuess1() {
  if ($leftChoice.hasClass('clickbait')) {
    console.log('correct');
    newRound();
  } else {
    console.log('wrong');
    moneyCount(money + 2942);
  }

}

// If the player guessed that the clickbait image was in the right div
function handleVoiceGuess2() {
  if ($rightChoice.hasClass('clickbait')) {
    console.log('correct');
    newRound();
  } else {
    console.log('wrong');
    moneyCount(money + 2942);
  }

}

//Updates the score depending on the guess (right or wrong)
function moneyCount(newAmount) {
  money = newAmount;
  $(".score").text(money);
}


function newRound() {

  $('.clickbait').removeClass('clickbait');

  //we have to create a 1/2 chance to get a good or a bad thumbnail for each div
  // There should only be one good image and one bad image displaying at the simultaneously
  let r = Math.random();

  if (r > 0.5) {
    $leftChoice.attr('src', 'assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    $leftChoice.addClass('clickbait');
    $rightChoice.attr('src', 'assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
  } else {
    $leftChoice.attr('src', 'assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
    $rightChoice.attr('src', 'assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    $rightChoice.addClass('clickbait');
  }

}

// function nextRound() {
//
//     //gotta remove the old guesses
//     $("#left").remove();
//     $("#right").remove();
//
//       setTimeout(newRound, 800);
//
//   }



//
// $(function() {
//   $("#bar").progressbar({
//     background: 'green',
//     value: 80
//   });
// });
