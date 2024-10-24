// ==UserScript==
// @name         Pyramids
// @version      2.3
// @description  28/09/2023 [Reduced Load Time]
// @author       adamski @uxillary
// @namespace    https://github.com/uxillary/neo-qol/
// @match        https://www.neopets.com/games/pyramids/pyramids.phtml
// @match        https://www.neopets.com/games/pyramids/pyramids*
// @match        https://www.neopets.com/games/pyramids/index.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @run-at	     document-end
// @grant        none
// ==/UserScript==

// Set a timeout for 30 seconds
let timeoutID = setTimeout(() => {
  window.location.href = "https://www.neopets.com/games/pyramids";
}, 30000); // 30000 milliseconds = 30 seconds

// Clear the timeout if the page successfully reloads or redirects [reduced loadtime]
document.addEventListener("DOMContentLoaded", () => {
  clearTimeout(timeoutID);
});

/* // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- //
// Create and inject CSS
const style = document.createElement('style');
style.innerHTML = `
  #feedback-popup {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: #f1f1f1;
    padding: 10px;
    border: 1px solid #ccc;
    z-index: 1000;
    text-align: left;
  }
  #feedback-content {
    max-height: 800px;
    overflow-y: auto;
  }
`;
document.head.appendChild(style);

// Create and append the popup
const popup = document.createElement("div");
popup.id = "feedback-popup";
popup.style.display = "none";

const title = document.createElement("h3");
title.innerText = "Feedback";
popup.appendChild(title);

const content = document.createElement("div");
content.id = "feedback-content";
popup.appendChild(content);

document.body.appendChild(popup);

// Function to add feedback
function addFeedback(message) {
  const p = document.createElement('p');
  p.textContent = message;
  document.getElementById('feedback-content').appendChild(p);
}

*/ // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- //

/*// Feedback Timeout
function randomTimeout1() {
  return Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
}

// Next Game Timeout
function randomTimeout2() {
  return Math.floor(Math.random() * (15000 - 1000 + 1) + 1000);
} */

// Generate random timeout
function randomTimeout() {
  return Math.floor(Math.random() * (3500 - 1000 + 1) + 1000);
}

// Function to click "Play Pyramids Again!" or "Play Pyramids!"
function playAgain() {
  const playButton = document.querySelector('input[type="submit"][value="Play Pyramids Again!"], input[type="submit"][value="Continue Playing"], input[type="submit"][value="Play Pyramids!"]');
  if (playButton) {
    setTimeout(() => {
//      addFeedback("Found 'Play Again' button. Clicking..."); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
      playButton.click();
    }, randomTimeout());
  }
}

// Function to draw a card
function drawCard() {
    setTimeout(() => {
//    addFeedback('Drawing a card...'); // Debugging Feedback
    const drawLink = document.querySelector('a[href="pyramids.phtml?action=draw"]');
    if (drawLink) {
      drawLink.click();
    } else {
//      addFeedback("No more draws, attempting to play."); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
      main(); // Call main function to attempt to play cards
    }
    }, randomTimeout());
}

// GAME RULES
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
// playRules[`${i}_${suit}`] = [`${previous}_${suit}`, `${next}_${suit}`];

let playRules = {};
for (let i = 2; i <= 14; i++) {
  let previous = (i === 2) ? 14 : i - 1;
  let next = (i === 14) ? 2 : i + 1;
  playRules[i] = [previous, next];
}

// Function to check play rules against active card
function checkPlayRules(card, activeCardNumber) {
  let activeRules = playRules[activeCardNumber];
  if (activeRules.includes(parseInt(card.cardName.split('_')[0]))) {
    return true;
  }
  return false;
}

// Smarter Moves
let cardsArray = [];

function getFutureMoves(cardName) {
  let futureMoves = 0;
  for (const card of cardsArray) {
    if (checkPlayRules(card, cardName)) {
      futureMoves++;
    }
  }
  return futureMoves;
}

// Game Count
let collectPointsCounter = 0;

//    MAIN
//  FUNCTION
function main() {
//  document.getElementById("feedback-popup").style.display = "block"; // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- // -- For Debugging -- //
//  addFeedback("Started"); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //

  // Check for 'Play Again' or 'Play Pyramids!' button
  if (document.querySelector('input[type="submit"][value="Play Pyramids Again!"], input[type="submit"][value="Continue Playing"], input[type="submit"][value="Play Pyramids!"]')) {
    setTimeout(() => {
      playAgain();
    }, randomTimeout());
    return;
  }

  // First check for Collect Points link
  const collectPointsLink = document.querySelector('a[href*="pyramids.phtml?action=collect"]');
    if (collectPointsLink) {
//        collectPointsCounter++; // Game Counter
//        addFeedback(`Collecting Points... Total Games: ${collectPointsCounter}`); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
        setTimeout(() => {
            collectPointsLink.click();
        }, randomTimeout());
        return; //Exit function after click
    }


  // Find active card
  let activeCardSrc = document.querySelector('td[valign="top"] img:nth-child(2)').src;
  // let activeCardName = activeCardSrc.split('/').pop().split('.')[0];
  let activeCardNumber = parseInt(activeCardSrc.split('/').pop().split('.')[0].split('_')[0]);

//  addFeedback(`Active Card: ${activeCardNumber}`); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //

  // Scrape cards from the table into an array
    let cardElements = document.querySelectorAll('a[href*="action=play&position"]');
    let cardsArray = Array.from(cardElements).map(el => {
    let imgSrc = el.querySelector('img').src;
    let cardName = imgSrc.split('/').pop().split('.')[0];
    let actionUrl = el.href;
    return { cardName, actionUrl };
  });

    // Check each card against play rules
    let playableCards = cardsArray.filter(card => checkPlayRules(card, activeCardNumber)); // Implement checkPlayRules()

    playableCards = playableCards.map(card => {
        card.futureMoves = getFutureMoves(card.cardName);
        return card;
    });

    playableCards.sort((a, b) => b.futureMoves - a.futureMoves);
    // Perform action
    if (playableCards.length > 0) {
        let bestCardToPlay = playableCards[0];
//        addFeedback(`Planning to play: ${bestCardToPlay.cardName}`); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
        setTimeout(() => {
//            addFeedback(`Playing card: ${bestCardToPlay.cardName}`); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
            window.location.href = bestCardToPlay.actionUrl;
        }, randomTimeout());
     //Draw Card Logic
    } else {
//        addFeedback("About to draw a card..."); // -- For Debugging Feedback -- // -- For Debugging Feedback -- //
        setTimeout(() => {
            drawCard();
        }, randomTimeout());
    }
}

// Call main function to start
main();
