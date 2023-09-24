// ==UserScript==
// @name         [SCORCHY SLOTS] Play
// @namespace    https://github.com/uxillary/NeoQOL/
// @version      1.1
// @description  Scorchy Slots. 22/09/2023
// @include      https://www.neopets.com/games/slots.phtml*
// @match        https://www.neopets.com/games/slots.phtml
// @author       Adamski @uxillary
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==


// Function to generate a random timeout between 1200ms and 2300ms
function getRandomTimeout() {
  return Math.floor(Math.random() * (2900 - 1800 + 1) + 1200);
}

// Function to find and click a button with the specified values
function findAndClickButtonWithRandomTimeout() {
  // Define an array of possible button values
  var buttonValues = ["Play Again", "Collect Winnings", "Click Here to Play"];

  // Define a function to find and click a button with the specified value
  function findAndClickButton(value) {
    var buttons = document.querySelectorAll('input[type="button"], input[type="submit"]');

    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].value === value) {
        buttons[i].click();
        return true;
      }
    }
    return false;
  }

  // Loop through the possible button values and try to find and click them
  for (var i = 0; i < buttonValues.length; i++) {
    var buttonValue = buttonValues[i];

    if (findAndClickButton(buttonValue)) {
      console.log(`Clicked the button with value: ${buttonValue}`);
      return; // Exit the function after clicking
    }
  }

  console.log("No suitable button found.");
}

// Usage: Call the function to find and click a button with a random timeout
setTimeout(findAndClickButtonWithRandomTimeout, getRandomTimeout());
