/*
 * simple raw JavaScript functions demonstrating event handlers,
 * DOM manipulation, and functions
 */

"use strict";

// this brings the button with the id show-msg-btn into this script
let showme = document.getElementById("show-msg-btn");
// this assigns an anonymous function to the on click listener
showme.onclick = function () {
    // the code in here is the handler for the onclick event
    
    // bring the hidden message into this script
    let msgdiv = document.getElementById("message");
    
    // test is and flip it
    
    if(window.getComputedStyle(msgdiv).display === "none"){
        console.log("making visible")
        msgdiv.style.color = getRandomColor()
        msgdiv.style.display = "inherit";
        showme.innerText = "Hide Message";
    } else {
        console.log("making invisible")
        msgdiv.style.display = "none";
        showme.innerText = "Show Message";
    }
};
