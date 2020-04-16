"use strict";

/********************************************************************

Alters
Jade Dufour

Alters is the story of a psychology student interviewing Margaret, the host of a system with multiple personalities. Along the way the player also meets James and Sophia, both alters of the system. Each alters has a specific vibe to them to visually represent their personalities.
*********************************************************************/



$(document).ready(setup);

// sounds found : https://freesound.org/people/ispeakwaves/sounds/384934/
let hostMusic;
let childAlterMusic;
let jamesMusic;
let $html = $('html');
let text;
let $clickButton;
let windowHeight;
let windowWidth;
let currentAlter;
let previousSeq;

function setup() {

// Load the songs
hostMusic = new Audio('assets/sounds/output2975.mp3');
jamesMusic = new Audio('assets/sounds/guitar.mp3');
childAlterMusic= new Audio('assets/sounds/child.wav');
// Generate buttons to switch between texts
$clickButton = $("#click");
$clickButton.on('click', first)

// I changed the cursor because the arrow was a little boring
  $('body').css({
    cursor: 'url(assets/images/hand.png), auto'
  });

}

// The off function is for the introduction screen
function off() {
  document.getElementById("homescreen").style.display = "none";
  // When the screen is gone, play and loop the jamesMusic
  hostMusic.loop = true;
  hostMusic.play();
  speak();

  // // typewritter try *******************************************************
  // type();
  // // typewritter try *******************************************************
}

function speak(){

// The voice options for responsivevoice
  let voiceOptions = {
  pitch: 1,
  rate: 0.9,
  volume: 0.7
}
//the voice gives the instructions
// responsiveVoice.speak($('.dialogue').text(), 'UK English Female', voiceOptions);
}





// We add buttons for each case
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

    case 13:
          jamesWho();
          break;

    case 14:
          jamesProtector();
          break;

    case 15:
          sophiaIntro();
          break;

    case 16:
          sophiaHi();
          break;

    case 17:
          sophiaTalks();
          break;

    case 18:
        sophiaFear();
        break;

    case 19:
        sophiaSwitch();
        break;

    case 20:
        margoEnd();
        break;

    case 21:
        final();
        break;


    case 22:
        reset();
        break;
        }


      previousSeq = seq;
      });
       $('.dialogue').append(button);

     }

// The initial state
// -----------------°°°°° Margo °°°°°-------------------------------------------
     function first() {
       // The particles act as a visual reprentation of each alter but the main
       // interaction will be a dialogue with the alters
        particlesJS.load('particles-js', 'assets/data/host.json', function() {});
        $('span').hide();
        $('.questions').remove();
        $('p').empty();
        text = "Hi! My name is Margo. I'm so glad you invited us today, we can't wait to let the world know about DID! ";
        type(text);
        addButton("It's nice to meet you Margo. First off all, let me know more about you.", 1);
        addButton("DID?", 2);
        // keep count of the current alter
        currentAlter = 0;

      }

 // It's nice to meet you Margo. First off all, let me know more about you.
 // # 1
      function MargaretIntro() {
      $('.questions').remove();

      text = "Well, my name is Margo, I consider myself part of a DID system of which I am the host so I use the body's legal name. I'm a 26 years old female and I identify as pansexual. I love music and outdoor activities!";
      type(text);
      addButton("Do you consider yourself as the 'original'then?", 4);
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
        type(text);
      addButton("That would be the alters?", 8);
      addButton("And those self-states would end up living their own life, right?", 6);
      addButton("What kind of trauma?",8);
      // keep count of the current alter
      currentAlter = 0;
}


// Do you consider yourself as the original?
// #4
      function original() {
      $('.questions').remove();
      $('p').empty();
      text = "No, thats just means that I’m out the most often. So I’m in control of the body the most often. I deal with daily life. I make sure we stay safe and healthy. \n A simple way I like to put it is : If you were to drop a glass and it shattered into a number of pieces on the floor, which piece is the original piece? ";
        type(text);
      addButton("Can you tell me more about DID", 2);
      addButton("How exactly do you keep the body safe?" ,8)
      // keep count of the current alter
      currentAlter = 0;
      }

  // That would be the alters, right?
  // And if I'm correct, those self-states would end up living their own life.
  //  # 6
    function margaretExplainsAlters() {
      $('.questions').remove();
      $('p').empty();
      text = "Exact! Alters are fragmented parts of your consciousness with completely different memories, opinions, tastes, etc. They might have a different sex, age, gender, orientation. They are their own person! We have a current total of 26 alters :) ";
        type(text);
      addButton("So they are a coping mechanism used by the brain?", 8);
      addButton("Are they there to help you cope with previous trauma?",8)
      // keep count of the current alter
      currentAlter = 0;
      }

// #8
function margaretDissociating(){

      $('.questions').remove();
      $('p').empty();
      text = "Uhm...th... I'm sorry, I'm dissociating... ";
        type(text);
      // If the player comes from the second question, they are redirected to the 11th one
      if( previousSeq === 2){
        // leads to James
      addButton("No worries, take your time.", 11);
      }
      // Else, they are redirected to the 9th one, which also leads to james haha
      else{
      addButton("It's alright, take your time.", 9);
      // keep count of the current alter
      currentAlter = 0;}

    }

// #9
  function dissociating(){
      $('.questions').remove();
      $('p').empty();
      text = " ... ";
        type(text);
      addButton(" ... ", 11);
      // keep count of the current alter
      currentAlter = 3;
      $html.css("background","linear-gradient(to bottom, #000000, #00009)");
      particlesJS.load('particles-js', 'assets/data/none.json', function() {});

        }

// #20
    function margoEnd(){
      $('.questions').remove();
      $('p').empty();
      text = " ... Hi, it's Margo. My head hurts... ";
    type(text);
      addButton(" Hi Margo, I got to meet James and Sophia. I want you to feel safe, if you need some rest would you like to end the interview? ", 21);
      childAlterMusic.pause();
      hostMusic.loop = true;
      hostMusic.play();
      // keep count of the current alter
      currentAlter = 0;
      $html.css("background","linear-gradient(to bottom, #000000, #000033)");
      particlesJS.load('particles-js', 'assets/data/host.json', function() {});
    }

// #21
    function final(){
      $('.questions').remove();
      $('p').empty();
      text = "Yes please. It was nice talking to you, I hope this interview helped people learn more about DID. ";
      type(text);
      addButton("Thank you", 22);
      // keep count of the current alter
      currentAlter = 0;
    }


// 22
  function reset(){
      hostMusic.pause();
      $('.guess').remove();
      $('p').empty();
      $('span').show();
        }
// -----------------°°°°° James °°°°°-------------------------------------------
// #11
      function jamesIntro(){
        $('.questions').remove();
        $('p').empty();
        text = "...Hoy! I don't think we've met. Nice to meet ya... Where are we exactly?";
          type(text);
        addButton(" Hi. We're in the middle of an interview for my master's degree. Do you feel comfortable continuing the interview? ", 12);
        addButton(" Who are you? ", 13);
        // keep count of the current alter
        currentAlter = 2;
        hostMusic.pause();
        jamesMusic.loop = true;
        jamesMusic.play();
        $html.css("background","linear-gradient(to bottom, #000000, #7C0000)");
       particlesJS.load('particles-js', 'assets/data/james.json', function() {});
      }


// #12
      function jamesWhere(){
        $('.questions').remove();
        $('p').empty();
        text = "Sure thing! Margo told me we was goin to do this. ";
        type(text);
        addButton(" We were discussing alters, can you define what exactly is an alter? ", 7);
        addButton("Is it just me or do I hear a different accent than Margo's?", 13);
        // keep count of the current alter
        currentAlter = 1;
      }

// That would be the alters, right?
// #7
      function jamesExplainsAlters() {

      $('.questions').remove();
      $('p').empty();
      text = "Yeah, alter stands for 'Alternate States of Consciousness'. An alter aint someone how HAS DID. Now, people really need to take that off their minds. Alters can hold trauma, others can act as protectors, some of 'em are young, others are like super old. We have a current total of 26 alters.";
      type(text);
      addButton("I see. Can you tell me more about yourself, James?", 13);
      // keep count of the current alter
      currentAlter = 1;
      }

// #13
      function jamesWho() {
      $('.questions').remove();
      $('p').empty();
      text = "F*ck I forgot to present myself... I always do that. My name's James, I'm 19 and I think I'm straight, yeah. I'm part of the system, I'm actually the primary protector.   ";
        type(text);
      addButton("What exactly is a primary protector?", 14);
      // keep count of the current alter
      currentAlter = 1;
      }


  // #14
      function jamesProtector() {
      $('.questions').remove();
      $('p').empty();
      text = "That means I take care of the younger or more vulnerable alters, I also protect the system ... I'm sorry I'm dissociatin' ";
        type(text);
      addButton("It's alright", 15);
      // keep count of the current alter
      currentAlter = 1;
      }

// -----------------°°°°° Sophia °°°°°------------------------------------------
// child alter
// #15
    function sophiaIntro(){
      $('.questions').remove();
      $('p').empty();
      text = "...Hi...  ";
        type(text);
      addButton("Hello, what's your name? ", 16);
      // keep count of the current alter
      currentAlter = 2;
      hostMusic.pause();
      jamesMusic.pause();
      childAlterMusic.loop = true;
      childAlterMusic.play();
      $html.css("background","linear-gradient(to bottom, #FFCCE5, #FFFFFF)");
      particlesJS.load('particles-js', 'assets/data/child.json', function() {});
    }

// #16
    function sophiaHi(){
      $('.questions').remove();
      $('p').empty();
      text = "...Sophia... im 5 ";
      type(text);
      addButton("Hi Sophia! Glad to meet you. I was just talking with someone else about DID.  ", 17);
      // keep count of the current alter
      currentAlter = 2;
    }
// #17
    function sophiaTalks(){
      $('.questions').remove();
      $('p').empty();
      text = "...We have DID! James told me last time that we are together like a big family ";
        type(text);
      addButton("Yes and he is right! ", 18);
      // keep count of the current alter
      currentAlter = 2;
    }

// #18
    function sophiaFear(){
      $('.questions').remove();
      $('p').empty();
      text = "...But im scared... I dont wanna be here...  (She starts crying) ...Sometimes I remember things and when I do i get scared and I wish I could disapear... I think I'm not alone... hold onto me please i'm leaving...  ";
        type(text);
      addButton("(Thinking about their past trauma is a negative trigger, she's dissociating. You give her some space) ", 19);
      // keep count of the current alter
      currentAlter = 2;
    }

// #19
    function sophiaSwitch(){
      $('.questions').remove();
      $('p').empty();
      text = " ...  ";
      type(text);
      // switches back to margo
      addButton(" ... ", 20);
      // keep count of the current alter
      currentAlter = 0;
    }





         function type(data){

           var pos = 0;
           var speed = 60;

           setTimeout(typeWriter, speed);
           

         function typeWriter() {
           if (pos < data.length) {
             document.getElementById("dataLog").innerHTML += data.charAt(pos);
             console.log(data.charAt(pos));
             pos++;
             setTimeout(typeWriter, speed);
           }
         }
         }
