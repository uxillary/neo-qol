// ==UserScript==
// @name         JN Item Name Extractor
// @version      1.4
// @description  Extracts item names from Jellyneo search results, displays them in a styled code box with a copy button and "Copied" message
// @author       adamski @uxillary
// @namespace    https://github.com/uxillary/neo-qol
// @match        https://items.jellyneo.net/search/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create an array to store item names
    let itemNames = [];

    // Select all the elements that contain item names
    const items = document.querySelectorAll('.jnflex-grid a.no-link-icon');

    // Loop through the selected items and extract their names
    items.forEach(item => {
        let itemName = item.textContent.trim();
        if (itemName) {
            itemNames.push(itemName);
        }
    });

    // Format the item names as a JavaScript list
    const formattedList = `const List = [\n  "${itemNames.join('",\n  "')}\"\n];`;

    // Create a div to display the formatted list
    let outputDiv = document.createElement('div');

    // Style the div to look like a subtle code box
    outputDiv.style.position = 'fixed';
    outputDiv.style.top = '20px';
    outputDiv.style.right = '20px';
    outputDiv.style.backgroundColor = '#f4f4f4'; // Subtle light grey background
    outputDiv.style.border = '1px solid #ccc'; // Light grey border
    outputDiv.style.borderRadius = '4px'; // Rounded corners
    outputDiv.style.padding = '10px';
    outputDiv.style.fontFamily = 'monospace'; // Monospace font for code look
    outputDiv.style.fontSize = '12px'; // Small font size
    outputDiv.style.maxHeight = '220px'; // Restrict height
    outputDiv.style.maxWidth = '250px'; // Restrict width
    outputDiv.style.overflowY = 'scroll'; // Scrollable if content overflows
    outputDiv.style.whiteSpace = 'pre'; // Preserve formatting with newlines
    outputDiv.style.zIndex = '10000'; // Ensure it's on top of other elements

    // Create a button for copying the text
    let copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '5px';
    copyButton.style.right = '5px';
    copyButton.style.backgroundColor = '#007BFF';
    copyButton.style.color = 'white';
    copyButton.style.border = 'none';
    copyButton.style.padding = '5px 10px';
    copyButton.style.fontSize = '12px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.borderRadius = '3px';

    // Create a "Copied!" message that will be shown after copying
    let copiedMessage = document.createElement('div');
    copiedMessage.textContent = 'Copied!';
    copiedMessage.style.position = 'absolute';
    copiedMessage.style.top = '30px';
    copiedMessage.style.right = '0px';
    copiedMessage.style.color = '#28a745'; // Green for success
    copiedMessage.style.fontSize = '12px';
    copiedMessage.style.fontWeight = 'bold';
    copiedMessage.style.opacity = '0'; // Start hidden
    copiedMessage.style.transition = 'opacity 0.3s ease'; // Smooth transition for fading

    // Function to copy the formatted list to the clipboard and show the "Copied!" message
    copyButton.onclick = function() {
        const textArea = document.createElement('textarea');
        textArea.value = formattedList;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Show "Copied!" message
        copiedMessage.style.opacity = '1';

        // Hide "Copied!" message after 2 seconds
        setTimeout(() => {
            copiedMessage.style.opacity = '0';
        }, 2000);
    };

    // Append the "Copied!" message and copy button to the div
    outputDiv.appendChild(copiedMessage);
    outputDiv.appendChild(copyButton);

    // Append the formatted list to the div
    let codeContent = document.createElement('pre');
    codeContent.textContent = formattedList;
    outputDiv.appendChild(codeContent);

    // Append the div to the body of the page
    document.body.appendChild(outputDiv);
})();
