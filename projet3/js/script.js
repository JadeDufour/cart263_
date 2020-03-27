"use strict";

/********************************************************************

Alters
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/



$(document).ready(setup);



let $html = $('html');
let text;
let $clickButton;
let windowHeight;
let windowWidth;
let currentAlter;
function setup() {


// Generate buttons to switch between texts
$clickButton = $("#click");
$clickButton.on('click', beginning)

// I changed the cursor because the arrow was a little boring
  $('body').css({
    cursor: 'url(assets/images/hand.png), auto'
  });

}

function addButton(label , seq) {
  let button = $('<div class="questions"></div>');
  button.text(label);

  button.button();
  button.on('click', function() {
    //I used switch states to switch between the questions in the dialogue
    switch (seq) {
      case 1:
          movingOn();
          break;

      case 2:
          notMovingOn(seq);
          break;

        }
      });
       $('.dialogue').append(button);
     }

     function beginning() {
       // The particles act as a visual reprentation of each alter but the main
       // interaction will be a dialogue with the alters
         particlesJS.load('particles-js', 'assets/data/host.json', function() {});

        $('span').hide();
        $('.questions').remove();
        $('p').empty();
        text = "Hi! My name is Kathy. I'm so glad you invited us today, we can't wait to let the world know about DID! ";
        $('p').append(text)
        addButton("It's nice to meet you Kathy. First off all, let me know more about you.", 1);
        addButton("DID?", 2);
        // keep count of the current alter
        currentAlter = 0;
      }
