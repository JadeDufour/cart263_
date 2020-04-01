"use strict";

/********************************************************************

Alters
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/



$(document).ready(setup);

// music found : https://freesound.org/people/ispeakwaves/sounds/384934/
let hostMusic;
let childAlterMusic;
let jamesMusic;
let $html = $('html');
let text;
let $clickButton;
let windowHeight;
let windowWidth;
let currentAlter;


function setup() {

hostMusic = new Audio('assets/sounds/output2975.mp3');
jamesMusic = new Audio('assets/sounds/guitar.mp3');
// Generate buttons to switch between texts
$clickButton = $("#click");
$clickButton.on('click', first)

// I changed the cursor because the arrow was a little boring
  $('body').css({
    cursor: 'url(assets/images/hand.png), auto'
  });




// relaxingMusic
// pizzicato????????????????????????????



}

function off() {
  document.getElementById("homescreen").style.display = "none";
  hostMusic.play();
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
          MargaretExplainDID();
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

      case 10:
          dissociating2();
          break;

     case 11:
          jamesIntro();
          break;

    case 12:
          jamesWhere();
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
      addButton("Do you consider yourself as the 'original'then?", 4);
      addButton("Do you want me to put on some music?", 5)

      // keep count of the current alter
      currentAlter = 0;
      }


// DID?
// Can you explain exactly what it DID.
// # 2
      function MargaretExplainDID(choice) {

      $('.questions').remove();
      $('p').empty();
      text = "Yes! Dissociative Identity Disorder is a disorder that's formed due to childhood trauma. Essentially, it disrupts the personnality from integrating fully. So instead of having one fully formed personnality, a child will grow up having multiple self-states";
      $('p').append(text);
      addButton("That would be the alters?", 10);
      addButton("And those self-states would end up living their own life, right?", 6);
}




// Do you consider yourself as the original?
// #4
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
  //  # 3
    function margaretExplainsAlters() {
      $('.questions').remove();
      $('p').empty();
      text = "Exact! Alters are fragmented parts of your consciousness with completely different memories, opinions, tastes, etc. They might have a different sex, age, gender, orientation. They are their own person!";
      $('p').append(text);
      addButton("So they are a coping mechanism used by the brain?", 8);
      // keep count of the current alter
      currentAlter = 0;
      }

// #8
function margaretDissociating(){
      $('.questions').remove();
      $('p').empty();
      text = "Uhm...th... I'm sorry, I'm dissociating... ";
      $('p').append(text);
      addButton("It's alright, take your time.", 9);
      // keep count of the current alter
      currentAlter = 0;
    }

// #9
  function dissociating(){
      $('.questions').remove();
      $('p').empty();
      text = " ... ";
      $('p').append(text);
      addButton(" ... ", 10);

      // keep count of the current alter
      currentAlter = 3;

      // var particlesJS, x;
      // x= particlesJS.speed[0];
      // if (particlesJS.speed[0] === 80){
      //   x=10;
      // }

      $html.css("background","linear-gradient(to bottom, #000000, #00009)");
      particlesJS.load('particles-js', 'assets/data/none.json', function() {});
        }

// #10
    function dissociating2(){
        $('.questions').remove();
        $('p').empty();
        text = " ... Give me a sec,I think I'm dissociating...  ";
        $('p').append(text);
        addButton(" No worries, take your time.", 11);
          // keep count of the current alter
        currentAlter = 3;

              // var particlesJS, x;
              // x= particlesJS.speed[0];
              // if (particlesJS.speed[0] === 80){
              //   x=10;
              // }

        $html.css("background","linear-gradient(to bottom, #000000, #00000)");
        particlesJS.load('particles-js', 'assets/data/none.json', function() {});
          }

// #11
      function jamesIntro(){
        $('.questions').remove();
        $('p').empty();
        text = "...Hoy! I don't think we've met, my name's James. Nice to meet ya... Where are we exactly?";
        $('p').append(text);
        addButton(" Hi James. We're in the middle of an interview for my master's degree. Do you feel comfortable continuing the interview? ", 12);
        // keep count of the current alter
        currentAlter = 2;
        hostMusic.pause();
        jamesMusic.play();
        $html.css("background","linear-gradient(to bottom, #000000, #7C0000)");
       particlesJS.load('particles-js', 'assets/data/james.json', function() {});
      }


// #12
      function jamesWhere(){
        $('.questions').remove();
        $('p').empty();
        text = "O' course! Margo told me we was goin to do this. ";
        $('p').append(text);
        addButton(" We were discussing alters, can you define what exactly is an alter? ", 13);
        addButton("Is it just me or do I hear a different accent than Margo's?", 14);
        // keep count of the current alter
        currentAlter = 1;
      }

// That would be the alters, right?
// #7
      function jameExplainsAlters() {

      $('.questions').remove();
      $('p').empty();
      text = "Yeah, alter stands for <<Alternate States of consciousness>>  ";
      $('p').append(text);
      addButton(".", 5);
      // keep count of the current alter
      currentAlter = 1;
      }
