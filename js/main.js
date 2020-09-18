/*
 * simple raw JavaScript functions demonstrating functions
 * that are accessible throughout the site
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

