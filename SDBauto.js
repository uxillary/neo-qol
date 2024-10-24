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
