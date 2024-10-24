// ==UserScript==
// @name         SDB Auto-Fill & Key
// @version      1.1
// @description  Automatically fills SDB PIN, additional key at the side for reference. 24/10/2024
// @author       adamski @uxillary
// @namespace    https://github.com/uxillary/neo-qol
// @match        https://www.neopets.com/safetydeposit.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Replace this with your actual PIN code
    const safetyDepositPIN = 'YOUR_PIN_HERE';

    // Wait for the input field to be available
    window.addEventListener('load', function() {
        // Attempt to find the input field for the PIN code
        const pinInputField = document.querySelector('#pin_field');
        
        if (pinInputField) {
            // Set the value of the input field to your PIN code
            pinInputField.value = safetyDepositPIN;
        } else {
            console.error('PIN input field not found.');
        }
    });
})();

(function() {
    'use strict';

    // Create the div element
    var keyDiv = document.createElement('div');

    // Set styles to make it subtle and fixed to the right side
    keyDiv.style.position = 'fixed';
    keyDiv.style.top = '20px';
    keyDiv.style.right = '10px';
    keyDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    keyDiv.style.border = '1px solid #ccc';
    keyDiv.style.padding = '10px';
    keyDiv.style.fontSize = '10px';
    keyDiv.style.fontFamily = 'Arial, sans-serif';
    keyDiv.style.zIndex = '1000';
    keyDiv.style.width = '150px';
    keyDiv.style.maxHeight = '90vh'; // Ensures it doesn't overflow the viewport
    keyDiv.style.overflowY = 'auto'; // Scroll if needed
    keyDiv.style.opacity = '0.6'; // Make it more subtle
    keyDiv.style.transition = 'opacity 0.2s';

    // Hover effect to make it more visible when hovered over
    keyDiv.onmouseover = function() {
        keyDiv.style.opacity = '1';
    };
    keyDiv.onmouseout = function() {
        keyDiv.style.opacity = '0.6';
    };

    // The content of the key -- Enter your SDB info here
    keyDiv.innerHTML = `
        <strong>- SDB Key -</strong><br><hr>
        Page 2: Codestones, Spooky & Underwater Maps<br><hr>
        Page 3: Lab Map, Ice Scratch, Battlecards<br><hr>
        Page 4: Job Coupons, Omelette, Nerks & Dubloons<br><hr>
        Page 5: Golden Dubloon, Jhudora<br><hr>
        Page 6: Fairground Scratch, Healing, Red Codestones<br><hr>
        Page 7: Neocola, Brightvale Coupons
    `;

    // Append the div to the body
    document.body.appendChild(keyDiv);
})();