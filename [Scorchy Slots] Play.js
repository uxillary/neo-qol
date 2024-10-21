// ==UserScript==
// @name         [SCORCHY SLOTS] Play2
// @namespace    https://github.com/uxillary/NeoQOL/
// @version      1.2
// @description  Scorchy Slots. Added HOLD position. 23/09/2023
// @match        https://www.neopets.com/games/slots.phtml*
// @author       Adamski @uxillary
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Function to generate a random timeout between 1200ms and 2300ms
function getRandomTimeout() {
  return Math.floor(Math.random() * (2100 - 1200 + 1) + 1200);
}

// Function to check if a TD cell contains the specified image source
function doesCellContainImage(cellIndex, imgSrc) {
  var cells = document.querySelectorAll('td');
  if (cells.length > cellIndex) {
    var cell = cells[cellIndex];
    var images = cell.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      if (images[i].src === imgSrc) {
        return true;
      }
    }
  }
  return false;
}

// Function to check the checkboxes for map pieces
  function checkMapPieceCheckboxes() {
    if (
      doesCellContainImage(0, 'images.neopets.com/games/slots/mappiece_0.gif') &&
      doesCellContainImage(1, 'images.neopets.com/games/slots/mappiece_0.gif') &&
      doesCellContainImage(2, 'images.neopets.com/games/slots/mappiece_0.gif') &&
      doesCellContainImage(3, 'images.neopets.com/games/slots/mappiece_0.gif') &&
      document.querySelector('input[name="hold1"]') &&
      document.querySelector('input[name="hold2"]') &&
      document.querySelector('input[name="hold3"]') &&
      document.querySelector('input[name="hold4"]')
    ) {
      // Check the checkboxes for the cells with the specified images
      document.querySelector('input[name="hold1"]').checked = true;
      document.querySelector('input[name="hold2"]').checked = true;
      document.querySelector('input[name="hold3"]').checked = true;
      document.querySelector('input[name="hold4"]').checked = true;
      console.log("Checked the checkboxes for map pieces.");
    }
  }
// Function to find and click a button with specified values
function findAndClickButton() {
  var buttonValues = ["Play Again", "Collect Winnings", "Click Here to Play"];
  for (var i = 0; i < buttonValues.length; i++) {
    var buttons = document.querySelectorAll('input[type="button"], input[type="submit"]');
    for (var j = 0; j < buttons.length; j++) {
      if (buttons[j].value === buttonValues[i]) {
        buttons[j].click();
        console.log(`Clicked button with value: ${buttonValues[i]}`);
        return true;
      }
    }
  }
  return false;
}

function findAndClickButtonWithRandomTimeout(maxRuns) {
  var currentRun = 0;

  function loop() {
    if (currentRun >= maxRuns) {
      console.log("Max runs reached. Stopping script.");
      return;
    }

    checkMapPieceCheckboxes(); // Check checkboxes for map pieces

    if (findAndClickButton()) { // Check if a button was actually clicked
      console.log("Button was clicked, setting timeout for next run.");
      currentRun++;
      setTimeout(loop, getRandomTimeout()); // Only set the next timeout if a button was clicked
    } else {
      console.log("Button not found. Trying again immediately.");
      loop();
    }
  }

  loop();
}

// Start the process
findAndClickButtonWithRandomTimeout(100);
