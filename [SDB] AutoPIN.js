// ==UserScript==
// @name         Neopets Safety Deposit Box Auto-Fill
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Automatically fill in the safety deposit box code on Neopets.
// @author       adamski
// @match        https://www.neopets.com/safetydeposit.phtml*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Replace this with your actual safety deposit box code
    const safetyDepositCode = 'YOUR_CODE_HERE';

    // Wait for the input field to be available
    window.addEventListener('load', function() {
        // Attempt to find the input field for the safety deposit code
        const codeInputField = document.querySelector('input[name="safetydepositbox_code"]');
        
        if (codeInputField) {
            // Set the value of the input field to your code
            codeInputField.value = safetyDepositCode;
        } else {
            console.error('Safety Deposit Box input field not found.');
        }
    });
})();
