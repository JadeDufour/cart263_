"use strict";

/********************************************************************

Alters
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/



$(document).ready(setup);

// music found : https://freesound.org/people/ispeakwaves/sounds/384934/
let relaxingMusic;
let $html = $('html');
let text;
let $clickButton;
let windowHeight;
let windowWidth;
let currentAlter;


function setup() {

relaxingMusic = new Audio('assets/sounds/backgroundLoop.mp3');
// Generate buttons to switch between texts
$clickButton = $("#click");
$clickButton.on('click', first)

// I changed the cursor because the arrow was a little boring
  $('body').css({
    cursor: 'url(assets/images/hand.png), auto'
  });

}

function off() {
  document.getElementById("homescreen").style.display = "none";
  relaxingMusic.play();
}

function addButton(label , seq) {
  let button = $('<div class="questions"></div>');
  button.text(label);
  button.button();
  button.on('click', function() {
    //I used switch states to switch between the questions in the dialogue
    switch (seq) {
      case 1:
          MargaretIntro();
          break;

      case 2:
          MargaretExplainDID(seq);
          break;

      case 3:
          howDID();
          break;

      case 4:
          meetingTime();
          break;

      case 4:
          meetingTime();
          break;




        }
      });
       $('.dialogue').append(button);
     }

     function first() {

       // The particles act as a visual reprentation of each alter but the main
       // interaction will be a dialogue with the alters
         particlesJS.load('particles-js', 'assets/data/host.json', function() {});

        $('span').hide();
        $('.questions').remove();
        $('p').empty();
        text = "Hi! My name is Margo. I'm so glad you invited us today, we can't wait to let the world know about DID! ";
        $('p').append(text)
        addButton("It's nice to meet you Margo. First off all, let me know more about you.", 1);
        addButton("DID?", 2);
        // keep count of the current alter
        currentAlter = 0;
      }


      function MargaretIntro() {

      $('.questions').remove();
      $('p').empty();
      text = "Well, my name is Margo, I consider myself part of a DID system of which I am the host so I use the body's legal name. I'm a 26 years old female and I consider myself as pansexual. I love music and outdoor activities!";
      $('p').append(text);
      addButton("Do you consider yourself as the 'original'?", 3);
      addButton("Do you want me to put on some music?", 4)
      addButton("Do you feel comfortable saying how many alters you have?", 4)
      // keep count of the current alter
      currentAlter = 0;
      }

// Do you consider yourself as the original?
      function original() {

      $('.questions').remove();
      $('p').empty();
      text = "No, thats just means that I’m out the most often. So I’m in control of the body the most often. I deal with daily life. I make sure we stay safe and healthy";
      $('p').append(text);
      addButton("Can you explain what exactly is DID.", 5);
      // keep count of the current alter
      currentAlter = 0;
      }

// Do you feel comfortable saying how many alters you have?
      function howMany() {

      $('.questions').remove();
      $('p').empty();
      text = "No, thats just means that I’m out the most often. So I’m in control of the body the most often. I deal with daily life. I make sure we stay safe and healthy";
      $('p').append(text);
      addButton("Can you explain what exactly is DID.", 5);
      // keep count of the current alter
      currentAlter = 0;
      }
