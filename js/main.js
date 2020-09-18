/*
 * simple raw JavaScript functions demonstrating event handlers
 * DOM manipulation, and functions
 */

"use strict";

function getRandomColor(){
  let letters = '0123456789ABCDEF';  // all the Hexadecimal single digits
  let color = '#'; // begin the color string
  for (let i = 0; i < 6; i++) {
    // get 6 random Hex digits
    color += letters[Math.floor(Math.random() * 16)];
  }
  // show the color choosen in the console for debugging purposes
  console.log(color)
  // send the color string back to the caller
  return color;
}

function colors(){
    // bring the title element into this script
    let maintitle = document.getElementById("main-title");
    console.log("setting colors"); // for debugging
    // set the color of maintitle
    maintitle.style.color = getRandomColor(); 
}

// this brings the button with the id press-me-btn into this script
let pressme = document.getElementById("press-me-btn");
// this assigns an anonymous function to the on click listener
pressme.onclick = function () {
    // the code in here is the handler for the onclick event
    colors();
};
