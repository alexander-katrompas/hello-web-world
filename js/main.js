/*
 * simple raw JavaScript functions demonstrating event handlers
 * DOM manipulation, and functions
 */

"use strict";

function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colors(){
    let maintitle = document.getElementById("main-title");
    console.log("setting colors");
    maintitle.style.color = getRandomColor();
}

let pressme = document.getElementById("press-me-btn");
pressme.onclick = function () {
    colors();
};
