// ==UserScript==
// @name         [Pyramids] Play
// @version      1.9
// @description  27/09/2023
// @namespace    https://github.com/uxillary/NeoQOL/
// @author       adamski @uxillary
// @match        https://www.neopets.com/games/pyramids/pyramids.phtml
// @match        https://www.neopets.com/games/pyramids/pyramids*
// @match        https://www.neopets.com/games/pyramids/index.phtml
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @run-at	     document-end
// @grant        none
// ==/UserScript==


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
    font-align: left;
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

// Generate random timeout
function randomTimeout() {
  return Math.floor(Math.random() * (4200 - 2800 + 1) + 2800);
}

// Feedback Timeout
function randomTimeout1() {
  return Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
}

// Function to add feedback
function addFeedback(message) {
  const p = document.createElement('p');
  p.textContent = message;
  document.getElementById('feedback-content').appendChild(p);
}

// Game Rules -- NEEDS ATTENTION
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let playRules = {};

suits.forEach(suit => {
  for (let i = 2; i <= 14; i++) {
    let previous = (i === 2) ? 14 : i - 1;
    let next = (i === 14) ? 2 : i + 1;
    playRules[`${i}_${suit}`] = [`${previous}_${suit}`, `${next}_${suit}`];
  }
});

// Function to click "Play Pyramids Again!" or "Play Pyramids!" button [TO ADD - Continue Button]<input type="submit" value="Continue Playing">
function playAgain() {
  const playButton = document.querySelector('input[type="submit"][value="Play Pyramids Again!"], input[type="submit"][value="Play Pyramids!"]');
  if (playButton) {
    setTimeout(() => {
      addFeedback("Found 'Play Again' button. Clicking...");
      playButton.click();
    }, randomTimeout1());
  }
}

// Function to draw a card
function drawCard() {
  setTimeout(() => {
    addFeedback('Drawing a card...');
    const drawLink = document.querySelector('a[href="pyramids.phtml?action=draw"]');
    if (drawLink) {
      drawLink.click();
    } else {
      addFeedback("Draw link not found. Attempting to play cards.");
      main(); // Call main function to attempt to play cards
    }
  }, randomTimeout1());
}

// Function to check play rules against active card
function checkPlayRules(card, activeCardName) {
  let activeRules = playRules[activeCardName];
  if (activeRules.includes(card.cardName)) {
    return true;
  }
  return false;
}

//    MAIN
//  FUNCTION
function main() {
  document.getElementById("feedback-popup").style.display = "block";
  addFeedback("Started");

  // Check for 'Play Again' or 'Play Pyramids!' button
  if (document.querySelector('input[type="submit"][value="Play Pyramids Again!"], input[type="submit"][value="Play Pyramids!"]')) {
    playAgain();
    return;
  }

  // First check for Collect Points link
  const collectPointsLink = document.querySelector('a[href*="pyramids.phtml?action=collect"]');
  if (collectPointsLink) {
    addFeedback("Collect Points link found. Clicking...");
    setTimeout(() => {
      collectPointsLink.click();
    }, randomTimeout1());
    return; // Exit the function after clicking
  }

  // Find active card
  let activeCardSrc = document.querySelector('td[valign="top"] img:nth-child(2)').src;
  let activeCardName = activeCardSrc.split('/').pop().split('.')[0];
  addFeedback(`Active card found: ${activeCardName}`);

  // Scrape cards from the table into an array
    let cardElements = document.querySelectorAll('a[href*="action=play&position"]');
    let cardsArray = Array.from(cardElements).map(el => {
    let imgSrc = el.querySelector('img').src;
    let cardName = imgSrc.split('/').pop().split('.')[0];
    let actionUrl = el.href;
    return { cardName, actionUrl };
  });

    // Check each card against play rules
    let playableCards = cardsArray.filter(card => checkPlayRules(card, activeCardName)); // Implement checkPlayRules()

    // Perform action
    if (playableCards.length > 0) {
        let randomIndex = Math.floor(Math.random() * playableCards.length);
        let cardToPlay = playableCards[randomIndex];
        addFeedback(`Planning to play: ${cardToPlay.cardName}`);
        setTimeout(() => {
            addFeedback(`Playing card: ${cardToPlay.cardName}`);
            window.location.href = cardToPlay.actionUrl;
        }, randomTimeout());
    } else {
        addFeedback("Planning to draw a card...");
        setTimeout(() => {
            drawCard();
        }, randomTimeout());
    }
}

// Call main function to start
main();
