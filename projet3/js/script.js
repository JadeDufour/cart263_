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

relaxingMusic = new Audio('assets/sounds/output2975.mp3');
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
          original();
          break;

      case 5:
          musicMargo();
          break;

      case 6:
          margaretExplainsAlters();
          break;

      case 7:
          jamesExplainsAlters();
          break;

      case 8:
          margaretDissociating();
          break;

      case 9:
          dissociating();
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

 // It's nice to meet you Margo. First off all, let me know more about you.
 // # 1
      function MargaretIntro() {

      $('.questions').remove();
      $('p').empty();
      text = "Well, my name is Margo, I consider myself part of a DID system of which I am the host so I use the body's legal name. I'm a 26 years old female and I identify as pansexual. I love music and outdoor activities!";
      $('p').append(text);
      addButton("Do you consider yourself as the 'original'?", 4);
      addButton("Do you want me to put on some music?", 5)

      // keep count of the current alter
      currentAlter = 0;
      }


// DID?
// Can you explain exactly what it DID.
// # 2
      function MargaretExplainDID() {

      $('.questions').remove();
      $('p').empty();
      text = "Yes! Dissociative Identity Disorder is a disorder that's formed due to childhood trauma. Essentially, it disrupts the personnality from integrating fully. So instead of having one fully formed personnality, a child will grow up having multiple self-states";
      $('p').append(text);
      addButton("That would be the alters?", 3);
      addButton("And those self-states would end up living their own life, right?", 3)
}





// Do you consider yourself as the original?
      function original() {

      $('.questions').remove();
      $('p').empty();
      text = "No, thats just means that I’m out the most often. So I’m in control of the body the most often. I deal with daily life. I make sure we stay safe and healthy. \n A simple way I like to put it is : If you were to drop a glass and it shattered into a number of pieces on the floor, which piece is the original piece? ";
      $('p').append(text);
      addButton("Can you tell me more about DID", 2);
      // keep count of the current alter
      currentAlter = 0;
      }

  // That would be the alters, right?
  // And if I'm correct, those self-states would end up living their own life.
    function margaretExplainsAlters() {
      $('.questions').remove();
      $('p').empty();
      text = "Exact! They are fragmented parts of your consciousness with completely different memories, opinions, tastes, etc. They might have a different sex, age, gender, orientation. They are their own person!";
      $('p').append(text);
      addButton("So they are a coping mechanism used by the brain?", 8);
      // keep count of the current alter
      currentAlter = 0;
      }


function margaretDissociating(){
      $('.questions').remove();
      $('p').empty();
      text = "That's ri... I'm sorry, I'm dissociating... ";
      $('p').append(text);
      addButton("It's alright, take your time.", 9);
      // keep count of the current alter
      currentAlter = 0;
    }


  function margaretDissociating(){
      $('.questions').remove();
      $('p').empty();
      text = " ... ";
      $('p').append(text);
      addButton(" ... ", 9);
      // keep count of the current alter
      currentAlter = 0;
        }


      function jamesIntro(){

      }

// That would be the alters, right?
      function jameExplainsAlters() {

      $('.questions').remove();
      $('p').empty();
      text = "No, thats just means that I’m out the most often. So I’m in control of the body the most often. I deal with daily life. I make sure we stay safe and healthy";
      $('p').append(text);
      addButton(".", 5);
      // keep count of the current alter
      currentAlter = 0;
      }
