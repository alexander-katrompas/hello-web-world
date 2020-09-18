/*
 * simple raw JavaScript functions demonstrating event handlers,
 * DOM manipulation, and functions
 */

"use strict";

/*
 * This function will go to the hidden div with the id "words"
 * and pull all the text out of it. Then it will remove all extra spaces
 * and return an array with all the words, one word per element.
 */
function getWords(){
    let text = document.getElementById("words").innerText;
    text = text.trim().replace(/\s\s+/g, ' ');
    return text.split(" ");
}

// this brings the button with the id show-msg-btn into this script
let showme = document.getElementById("show-msg-btn");
// this assigns an anonymous function to the on click listener
showme.onclick = function () {
    // the code in here is the handler for the onclick event
    
    // bring the hidden message into this script
    let msgdiv = document.getElementById("message");
    
    // test it and flip it
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

/*
 * This listener and handler will check all the input boxes for
 * their content and display them in a words message area.
 */
let checkinputs = document.getElementById("check-inputs");
checkinputs.onclick = function () {
    let inputs = document.getElementsByClassName("inputs");
    let wordsmsg = document.getElementById("words-msg");
    let num = inputs.length;
    let numboxes = inputs.length;
    
    console.log("There are " + num + " input boxes.");
    let str = "The words you enterd are: ";
    for (let i = 0; i < numboxes; i++) {
        str += inputs.item(i).value + " ";
    }
    wordsmsg.innerText = str;
}

/*
 * This listener and handler will clear all the input boxes.
 */
let clearinputs = document.getElementById("clear-inputs");
clearinputs.onclick = function () {
    let wordsmsg = document.getElementById("words-msg");
    let inputs = document.getElementsByClassName("inputs");
    let num = inputs.length;
    for (let i = 0; i < num; i++) {
        inputs.item(i).value = "";
    }
    wordsmsg.innerHTML = "";
}

/*
 * This listener and handler will randomly fill the boxes with
 * words from the words from the div "words"
 */
let fillinputs = document.getElementById("fill-inputs");
fillinputs.onclick = function () {
    
    let words = getWords();
    console.log(words);
    let numWords = words.length;
    
    let inputs = document.getElementsByClassName("inputs")
    let numInputs = inputs.length;
    console.log(numWords + " words, " + numInputs + " input boxes");
    
    let index = 0;
    for(let i = 0; i<numInputs; i++){
        index = Math.floor(Math.random() * numWords);
        inputs[i].value = words[index];
    }
}
