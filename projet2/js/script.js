"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

**Every 'friendly' thumbnails come from verified (certified) youtube channels (Nick Jr, Peppa Pig Official, Little Angel, Masha ans The Bear, Toddler Fun Learning, DC SuperHero Girls)**

*********************************************************************/

let $leftChoice;
let $rightChoice;
//each wrong guess scares more kids
let money = 0;

//home screen active
let homeScreenActive = true;
let homeScreenFont;

//An array of creepy clickbait thumbnails found online
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

//an array of actual thumbnails that kids friendly
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

function preload(){
  homeScreenFont = loadFont("assets/Calculator.ttf");
}
$(document).ready(setup);



function setup(){


  $leftChoice = $('#left');
  $rightChoice = $('#right');
  //for a new round to begin
  newRound();
  if (annyang) {

// Let's define our first command. First the text we expect, and then the function it should call
var commands = {
 "Start the day": quitHomeScreen,
 "I think it is number one": handleVoiceGuess1,
 "I think it is number two": handleVoiceGuess2,

};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}
}
function draw(){
  if (homeScreenActive){
    homeScreen();
  }
  else if (!homeScreenActive){

  }
}

function homeScreen(){

  responsivevoice.speak('hi', 'US English Male');
  background(blue);
  push();
    textSize(20);
    textFont(homeScreenFont);
    textAlign(CENTER);
    text("Welcome back.\n Say : <Start the day > to start working \n with your AI coworker" , width/2, height/2);
  pull();
}
function quitHomeScreen(){}

function handleVoiceGuess1(){
if($leftChoice= clickbait[0]){
console.log('correct');
// newRound();
}
else{
console.log('wrong');
moneyCount(money + 2942);
}

}

function handleVoiceGuess2(){
  if($rightChoice== clickbait[0]){
console.log('correct');
// newRound();
  }
  else{
console.log('wrong');
moneyCount(money + 2942);
  }

  }

  function moneyCount(newAmount){
  //Updates the score depending on the guess (right or wrong)
 money= newAmount;
 $(".score").text(money);
}


function newRound(){


// let imageIndex = Math.floor(Math.random() * abusePhrases.length);










  //===========================================================================
  //we have to create a 1/2 chance to get a good or a bad thumbnail for each div

  let r = Math.random();

  if (r > 0.5){
    $leftChoice.attr('src','assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    $rightChoice.attr('src','assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
  }

  else {
    $leftChoice.attr('src','assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
    $rightChoice.attr('src','assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
  }

  //checkAnswer();
}

// function checkAnswer(){
//
//   // linking the variables
//   if (animalGuess === $correctButton.text()) {
//     // updating the score()
//     scoreCount(score +1);
//     // removes the buttons
//     $('.guess').remove();
//     // time delay
//     setTimeout(newRound, 1000);
//
//   } else {
//     // shake event
//     $('.guess').effect('shake');
//
//     // says answer backwards
//     sayBackwards($correctButton.text());
//   }
// }


$( function() {
    $( "#bar" ).progressbar({
      background: 'green',
      value: 80
    });
  } );
