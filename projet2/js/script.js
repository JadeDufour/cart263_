"use strict";

/********************************************************************

Clickbait lessons
Jade Dufour

In this game you will play as a moderator teaching an AI to recognize thumbnails coming from
non-official Youtube Kids channels. Videos targeting a young audience have gotten more and more creative
every year and evil-minded companies have started taking advantage of that phenomenon; using the
same type of visuals to lure children into clicking on their videos. Such videos often display
characters from copyrighted tv shows or frm video games acting in distrbing manners.
CLick on the thumbnail you think isn't from an official Youtube Channel. If you guess wrong,
evil companies will keep on making money from that video.

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

$(document).ready(setup);


function setup() {

  $leftChoice = $('#left');
  $rightChoice = $('#right');


  $('#dialogEnd').dialog({
    modal: true,
    autoOpen: false,
    });


  //for a new round to begin
  newRound();
  if (annyang) {


    var commands = {
      // To hide the overlay div
      "start the day": off,
      // The next two commands are to handle the guesses depending on the div chosen (the left one or the right one)
      "I think it is number one": handleVoiceGuess1,
      "I think it is number two": handleVoiceGuess2,

    };

    // Mouse commands in case the speech commands dont't work because of technical problems
    $leftChoice.on('click', handleVoiceGuess1);
    $rightChoice.on('click', handleVoiceGuess2);

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
}

// Display the time
// Got the code from : https://stackoverflow.com/questions/10931197/make-a-live-clock-with-existing-time-in-div-with-javascript
setInterval(function() {
  document.getElementById("calendar").innerHTML = (new Date()).toLocaleTimeString();
}, 1000);

// A progress bar which let us know how the knowledge of the AI is progressing
// inspired from : http://jsfiddle.net/b66d7/1/
function move() {
  $('#myBar').css("width", '+=' + (0.1 * $('#myProgress').width()));
      return false;

    // if ($('#myBar').width() === $('#myProgress').width()){
    //   $(".dialogEnd").parent().show()
    // }
}

//To make the intro screen disapear
function off() {

  document.getElementById("homescreen").style.display = "none";
  // wait for a few seconds before telling the instructions
  setTimeout(tellInstructions, 100);

}

function tellInstructions() {
  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: 1,
    rate: 1
  };
  responsiveVoice.speak("Refer to the instructions in the green box if you can't remember how to teach the AI ", 'UK English Male', options);
}

// If the player guessed that the clickbait image was in the left div
function handleVoiceGuess1() {
  // check if the div actually holds the Clickbait class
  if ($leftChoice.hasClass('clickbait')) {
    console.log('correct');
    move();
    // create a new round
    setTimeout(newRound, 2000);
    // change the robot image to the gif of it dancing
    $('#robot').attr('src', 'assets/images/dance.gif');
  } else {
    // If not, bad people cash in on your mistake
    console.log('wrong');
    moneyCount(money + 2942);
  }

}

// If the player guessed that the clickbait image was in the right div
function handleVoiceGuess2() {
  // check if the div actually holds the Clickbait class
  if ($rightChoice.hasClass('clickbait')) {
    console.log('correct');
    move();
    // create a new round
    setTimeout(newRound, 2000);
    // change the robot image to the gif of it dancing
    $('#robot').attr('src', 'assets/images/dance.gif');
  } else {
    // If not, bad people cash in on your mistake
    console.log('wrong');
    moneyCount(money + 2942);
  }

}

//Updates the score depending on the guess (right or wrong)
function moneyCount(amount) {
  money = amount
  $(".score").text(money);
}


function newRound() {
  // We have to remove the images before starting a new round
  $('.clickbait').removeClass('clickbait');
  // Make sure the robot is not dancing when a new round starts
  $('#robot').attr('src', 'assets/images/robot.png');

  //we have to create a 1/2 chance to get a good or a bad thumbnail for each div
  // There should only be one good image and one bad image displaying at the simultaneously
  let r = Math.random();

  if (r > 0.5) {
    $leftChoice.attr('src', 'assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    // We give a class of Clickbait (thats what the game will be looking for when checking if the answer given if right or wrong)
    $leftChoice.addClass('clickbait');
    $rightChoice.attr('src', 'assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
  } else {
    $leftChoice.attr('src', 'assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
    $rightChoice.attr('src', 'assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
    // We give a class of Clickbait (thats what the game will be looking for when checking if the answer given if right or wrong)
    $rightChoice.addClass('clickbait');
  }

}
