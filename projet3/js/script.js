"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/



$(document).ready(setup);



let $html = $('html');
let windowHeight;
let windowWidth;

function setup() {


  particlesJS.load('particles-js', 'assets/data/host.json', function() {});

  $('body').css({
    cursor: 'url(assets/images/hand.png), auto'
  });

}
