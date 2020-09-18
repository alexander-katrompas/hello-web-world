/*
 * simple raw JavaScript functions demonstrating event handlers,
 * DOM manipulation, and functions
 */

"use strict";

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
