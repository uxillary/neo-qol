// ==UserScript==
// @name         Dice-A-Roo
// @version      1.2
// @description  Inspired by Midas@Sythe version 2020. Added Timeout & Stop - 23/09/2023
// @author       adamski @uxillary
// @namespace    https://github.com/uxillary/neo-qol
// @match        https://www.neopets.com/games/play_dicearoo.phtml*
// @match        https://www.neopets.com/games/dicearoo.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==


// Function to generate a random timeout between 1900ms and 2900ms
function getRandomTimeout() {
  return Math.floor(Math.random() * (2900 - 1900 + 1) + 1900);
}

// Function to find a link containing the specified string
function findLinkContainingString(myStr) {
  var aTags = document.getElementsByTagName("input");
  var searchText = myStr;
  var found;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].value.search(searchText) != -1) {
      console.log("Found tag with textContent: " + aTags[i].value);
      found = aTags[i];
      break;
    }
  }
  return found;
}

// Function to check if the specified text is present in a <p> element on the page
function isTextPresentInPElement(text) {
  var pElements = document.getElementsByTagName("p");
  for (var i = 0; i < pElements.length; i++) {
    if (pElements[i].textContent.includes(text)) {
      return true;
    }
  }
  return false;
}

// Execute the tasks with random timeouts and stop condition
function executeTasks() {
  setTimeout(function () {
    var resetear = findLinkContainingString("Lets Play!");
    var play = findLinkContainingString("Play Dice-A-Roo");
    var rollAgain = findLinkContainingString("Roll Again");
    var pressMe = findLinkContainingString("Press Me");

    if (resetear != null) {
      resetear.click();
    } else if (play != null) {
      play.click();
    } else {
      if (!isTextPresentInPElement("I'm SO BORED of Dice-A-Roo... let's play something else!")) {
        if (rollAgain != null) {
          rollAgain.click();
        } else {
          pressMe.click();
        }
        executeTasks(); // Continue executing tasks recursively
      }
    }
  }, getRandomTimeout());
}

// Start executing tasks
executeTasks();
