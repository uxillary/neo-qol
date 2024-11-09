// ==UserScript==
// @name         [obj 30] Spooky Food
// @version      1.6
// @description  Highlights items, added price key
// @author       adamski @uxillary
// @namespace    https://github.com/uxillary/neo-qol
// @match        https://www.neopets.com/objects.phtml?obj_type=30&type=shop
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

const refreshKey = 'refreshEnabled30'; // Key to track refresh state in localStorage
const minRefreshTime = 9001; // Minimum refresh interval (5 seconds)
const maxRefreshTime = 16601; // Maximum refresh interval (12 seconds)

// Load notification sound
const notificationSound = new Audio("https://raw.githubusercontent.com/uxillary/neo-qol/main/audio/spooky.wav");
notificationSound.volume = 0.5;

// Function to start or stop the refresh timer
function toggleRefresh() {
    const refreshEnabled = JSON.parse(localStorage.getItem(refreshKey)) || false;
    if (refreshEnabled) {
        localStorage.setItem(refreshKey, false);
        clearTimeout(refreshTimeout); // Stop refreshing
        refreshButton.textContent = "Start";
        refreshButton.style.backgroundColor = '#007BFF'; // Set button to blue when inactive
    } else {
        localStorage.setItem(refreshKey, true);
        setRandomRefresh(); // Start refreshing
        refreshButton.textContent = "Stop";
        refreshButton.style.backgroundColor = '#28a745'; // Set button to green when active
    }
}

// Function to set a random refresh interval
function setRandomRefresh() {
    if (JSON.parse(localStorage.getItem(refreshKey))) {
        const refreshInterval = Math.floor(Math.random() * (maxRefreshTime - minRefreshTime + 1)) + minRefreshTime;
        refreshTimeout = setTimeout(() => {
            location.reload();
        }, refreshInterval);
    }
}

// Create the refresh toggle button
const refreshButton = document.createElement('button');
refreshButton.style.position = 'fixed';
refreshButton.style.top = '110px';
refreshButton.style.right = '35px';
refreshButton.style.backgroundColor = JSON.parse(localStorage.getItem(refreshKey)) ? '#28a745' : '#007BFF'; // Green if active, blue if inactive
refreshButton.style.color = 'white';
refreshButton.style.padding = '8px 12px';
refreshButton.style.border = 'none';
refreshButton.style.borderRadius = '4px';
refreshButton.style.cursor = 'pointer';
refreshButton.style.fontSize = '12px';
refreshButton.style.zIndex = '1000';
refreshButton.textContent = JSON.parse(localStorage.getItem(refreshKey)) ? "Stop" : "Start";

// Add button click event to toggle the refresh
refreshButton.addEventListener('click', toggleRefresh);
document.body.appendChild(refreshButton);

// Start the refresh timer if enabled
if (JSON.parse(localStorage.getItem(refreshKey))) {
    setRandomRefresh();
}

//change list items here

// List Items < 1,000 np
const List0 = [
  "Almost Gummy Rat (Grape)",
  "Almost Gummy Rat (Strawberry)",
  "Angry Marshmallows",
  "Bat Cookie",
  "Blumaroo Steak",
  "Bone Dog",
  "Bottled Droolik Drool",
  "Box of Skull Truffles",
  "Brain Stew",
  "Candy Corn Stuffed Pumpkin",
  "Cannibalistic Pumpkin",
  "Carnivorous Carved Pumpkin",
  "Chilled Eyeball Custard",
  "Chilled Eyes with Clam Sauce",
  "Chocolate Ice Cream Apple Lantern",
  "Chocolate Korbat Ice Lolly",
  "Chokato Ghostkersandwich",
  "Clawmatoe",
  "Crispy Pumpkin Chips",
  "Deviled Delight",
  "Deviled Eggs",
  "Deviled Steak",
  "Disgruntled Candy Corn",
  "Ectoplasm Nachos",
  "Eliv Thade Chips",
  "Eliv Thade Sandwich",
  "Eliv Thade Sludge Shake",
  "Eye Candy",
  "Festering Coffee",
  "Ghost Pancakes",
  "Ghostly Soup",
  "Glaring Eye Wrap",
  "Gnome Shroom",
  "Grundo Stix",
  "Halloween Jinjah Platter",
  "Haunted Milk",
  "Jellied Eyeballs",
  "Large Grundo Toe With Lint Side Order",
  "Mummified Ice Cream",
  "Octornapie",
  "Peanut Butter Spiders",
  "Pulsating Brain Custard",
  "Pumpkin Cookies",
  "Pumpkin Pie",
  "Pumpkin Slice",
  "Roast Tentacle",
  "Roasted Spyder on a Stick",
  "Scary Soup",
  "Skeith Juice Cocktail",
  "Slime Ghostkersandwich",
  "Slime Sundae",
  "Slimesicle",
  "Snail Cream Cone",
  "Snorkle Pudding",
  "Spaghetti and Eyeballs",
  "Spectral Cinnamon Rolls",
  "Spider Licorice",
  "Spooky Doughnut",
  "Spooky Gooplecream",
  "Spooky Raspberry Pie",
  "Spooky Shake",
  "Squishy Brain Wrap",
  "Sun Dried Techo Claw",
  "Toffee Classic",
  "Tombscones",
  "Tongue with Veggies",
  "Undead Celery",
  "Undead Turnip",
  "Zombie Marshmallows",
];

// List Items > 2k - 5k np
const List1 = [
  "Aggressive Casserole",
  "Beast Burger",
  "Brain Candy Mix",
  "Candy Corn Classic",
  "Candy Corn Fizzy Drink",
  "Cheese Puff Fingers",
  "Chocolate Covered Peanuts",
  "Chocolate Graveyard Cake",
  "Coffin Cake",
  "Count Cross Buns",
  "Creepy Spring Salad",
  "Cup of Pustulence",
  "Eyeball and Worm Sandwich",
  "Eyeball Slushie",
  "Finger Sandwiches",
  "Fried Worm Stew",
  "Frothy Fruit Juice",
  "Ghost Burger",
  "Ghostmallow Smore",
  "Gooey Bug Soup",
  "Halloween Tapira Cake",
  "Haunted Pumpkin Bar",
  "Ichor Ghost Toast",
  "Intestines and Marinara",
  "Korbat Wing Soup",
  "Magic Ghost Marshmallows",
  "Millipede Lollypop",
  "Mystery Meat Sandwich",
  "Pickled Eyeballs",
  "Pumpkin Ghost Toast",
  "Pumpkin Pot Pie",
  "Refreshing Barrel Water",
  "Roast Lizard Eggs",
  "Slime Cream",
  "Slime-Frosted Pretzel",
  "Slimy Pumpkin Soup",
  "Spaghetti and Brains",
  "Spooky Donuts",
  "Spooky Lime Pudding",
  "Tongue Wrap",
  "Vanilla Ice Cream Apple Lantern",
  "Wormy Pasta",
];

// List Items 5k - 15k np
const List2 = [
  "Berried in Bread",
  "Bloody Ghost Toast",
  "Blooppop",
  "Blumaroo Tail Salad Extravaganza",
  "Boiled Lizard Stew",
  "Chocolate Jack-O-Lantern Chip Cookie",
  "Cole Slaughter",
  "Cookie Hats",
  "Crunch Chocolate Scoaches",
  "Crunchy Tooth Surprise",
  "Crypt Crisps",
  "Deadly Apple Pie",
  "Deep Fried Ghosts",
  "Eerie Eggs",
  "Eye of Mortog Soup",
  "Eyeball Stew Cake",
  "Eyewich",
  "Fright Pop",
  "Ghost Mashed Potato",
  "Ghost Meepmallows",
  "Ghost Puff",
  "Gummi Worms",
  "Halloween Oranges",
  "Holiday Eye Candy",
  "Holiday Ghostpuff",
  "Holiday Gingerbread Mansion",
  "Holiday Spoiled Neggnog",
  "Horror Doeuvres",
  "Impasta Spaghetti and Meatballs",
  "Intesteen Casserole",
  "Lizarkagna",
  "Macawormi and Cheese",
  "Marshmallow and Slime Souffle",
  "Meatloathe",
  "Menacing Brew",
  "Pink Spooky Floss",
  "Rest in Pea Soup",
  "Roast Worm with Cranberries",
  "Saus-Rage",
  "Snorkle Snout",
  "Spooky Handwich",
  "Spyder Eggs",
  "Spyder Muffins",
  "Strawberry Ice Cream Apple Lantern",
  "This Isnt Chili Cheese Fries",
  "Turkey Monster",
  "Twice-Baked Spiked Potato",
  "Vanilla Ghost Cake",
];

// List Items 15k - 100k NP
const List3 = [
  "Army of Undead Cupcakes",
  "Bat Kebab",
  "Bloody Ghost Toast",
  "Bloopcream",
  "BluePepper Porridge",
  "Bone-Chilling Bacon",
  "Brain Ice Cream",
  "Brains and Dumplings",
  "Cadaverous Cola",
  "Candy Skull",
  "Chocolate Coated Eye",
  "Coffee of the Dead",
  "Disturbing Gelatin",
  "Droolik Surprise",
  "Ednas Spooky Brew",
  "Elephante Trunk Stew",
  "Forgotten Apple",
  "Hair Stuffed Maggot",
  "Haunted Salad",
  "Jalapeno Cheese Nightmare",
  "Psimouse Cake",
  "Pumpkin Ice Cream",
  "Pumpkin Scoopings",
  "Quiggle Pie",
  "Raspberry Ghostkerchief Jelly",
  "Rest in Peace of Chicken",
  "Rotting Veggies Salad",
  "Sponge Apple",
  "Spooky Ghostbeef",
  "Strawberry Ice Cream Apple Lantern",
  "The Stuff",
  "This Isnt Chili Cheese Fries",
  "Worm Stew",
];

// List Items > 100k NP +
const List4 = [
  "Apple Lantern",
  "Bogie Berry",
  "Chocolate Coated Eye",
  "Coco Pumpkin",
  "Crunchy Snotball",
  "Elderly Apple",
  "Gorerito",
  "Grundo Toe Lint",
  "Halloween Candy Cane",
  "Jelly Finger",
  "Jelly Spider Eyeball",
  "Meerca Pie",
  "Mouldy Cheese",
  "Parts on a Pizza",
  "Pink Apple Lantern",
  "Pink Spooky Ice Cream",
  "Pink Spooky Popcorn",
  "Poison Apples",
  "Runny Snot",
  "Spoooky Muffin",
  "Steamed Ectoplasm",
  "Wing of Korbat",
];

// Function to apply styles to items based on the current array
(function() {
    'use strict';
    // Display a Key on page
    // Create the price key div element
    var keyDiv = document.createElement('div');

    // Set styles to make it subtle and fixed to the right side
    keyDiv.style.position = 'fixed';
    keyDiv.style.top = '180px';
    keyDiv.style.right = '3px';
    keyDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    keyDiv.style.border = '1px solid #ccc';
    keyDiv.style.padding = '10px';
    keyDiv.style.fontSize = '11px';
    keyDiv.style.fontFamily = 'Arial, sans-serif';
    keyDiv.style.zIndex = '1000';
    keyDiv.style.width = '90px';
    keyDiv.style.maxHeight = '90vh'; // Ensures it doesn't overflow the viewport
    keyDiv.style.overflowY = 'auto'; // Scroll if needed
    keyDiv.style.opacity = '0.4'; // Make it more subtle
    keyDiv.style.transition = 'opacity 0.2s';

    // Hover effect to make it more visible when hovered over
    keyDiv.onmouseover = function() {
        keyDiv.style.opacity = '1';
    };
    keyDiv.onmouseout = function() {
        keyDiv.style.opacity = '0.6';
    };

    // The content of the key with added space and alignment tweaks
    keyDiv.innerHTML = `
    <div style="display: flex; align-items: center;">
    <strong>- Price Key -</strong></center><br><br>
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; background-color: #f1f1f1; margin-right: 5px;"></div>
        < 1,000 np
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; background-color: #fff; margin-right: 5px;"></div>
        1k - 2k
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; border: 1px dotted green; margin-right: 5px;"></div>
        2k - 5k
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; border: 1px solid orange; margin-right: 5px;"></div>
        5k - 15k
    </div>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 2px dashed red; margin-right: 5px;"></div>
        15k - 100k
    </div>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 2px solid red; margin-right: 5px; margin-top: 5px;"></div>
        100k +
    </div>
`;

    // Countdown Element
    let countdownDiv = document.createElement('div');
    countdownDiv.style.marginTop = '10px';
    countdownDiv.style.fontSize = '12px';
    countdownDiv.style.fontWeight = 'bold';
    countdownDiv.style.color = '#333';
    countdownDiv.textContent = 'Countdown: 5';

    keyDiv.appendChild(countdownDiv); // Append countdown below the price key
    document.body.appendChild(keyDiv);

    // Countdown Logic
    let countdown = 5;
    setInterval(() => {
        countdown = countdown === 1 ? 5 : countdown - 1; // Reset to 5 after reaching 1
        countdownDiv.textContent = `Countdown: ${countdown}`;
    }, 1000); // Update every second

// Append the price key div to the body
    document.body.appendChild(keyDiv);
})();

// Tab Colour Change/ Flash

let flashInterval; // Store the interval ID to stop flashing later
let originalTitle = document.title; // Save the original title

// Function to start flashing the tab title
function startFlashingTab() {
    flashInterval = setInterval(() => {
        document.title = document.title === originalTitle ? "⚠️ High-Value Item! ⚠️" : originalTitle;
    }, 500); // Flash every 500ms
}

// Function to stop flashing the tab title
function stopFlashingTab() {
    clearInterval(flashInterval); // Stop the interval
    document.title = originalTitle; // Reset to original title
}


// Function to apply styles to items based on the current array
function applyStylesToItems(itemArray) {
  var itemNames = document.getElementsByClassName("item-name");

  for (var i = 0; i < itemNames.length; i++) {
    var itemName = itemNames[i].textContent.trim();

    if (itemArray.includes(itemName)) {
      // Apply different styles based on the array order
      if (itemArray === List4) {
        // Red Thick Box
        notificationSound.play(); // Play sound
        startFlashingTab(); // Start flashing the tab
        setTimeout(stopFlashingTab, 6000); // Stop flashing after 6 seconds
        itemNames[i].parentNode.style.border = "5px solid red";
        itemNames[i].parentNode.style.padding = "5px";
        itemNames[i].parentNode.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.2)";
        itemNames[i].style.color = "red";
        itemNames[i].style.fontWeight = "800";
        itemNames[i].style.textDecoration = "underline";
      } else if (itemArray === List3) {
        // Red Dashed
        notificationSound.play(); // Play sound
        startFlashingTab(); // Start flashing the tab
        setTimeout(stopFlashingTab, 6000); // Stop flashing after 6 seconds
        itemNames[i].parentNode.style.border = "2px dashed red";
        itemNames[i].style.color = "red";
        itemNames[i].parentNode.style.paddingTop = "5px";
        itemNames[i].parentNode.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.1)";
      } else if (itemArray === List2) {
        // Orange
        itemNames[i].style.color = "orange";
        itemNames[i].parentNode.style.border = "2px solid orange";
        itemNames[i].parentNode.style.paddingTop = "5px";
        itemNames[i].parentNode.style.boxShadow = "0 4px 8px rgba(255, 165, 0, 0.2)";
      } else if (itemArray === List1) {
        // Green Dotted
        itemNames[i].style.color = "green";
        itemNames[i].parentNode.style.border = "1px dotted green";
        itemNames[i].parentNode.style.paddingTop = "5px";
        itemNames[i].parentNode.style.boxShadow = "0 4px 8px rgba(0, 255, 0, 0.2)";
      } else if (itemArray === List0) {
        // Light Grey
        itemNames[i].style.color = "lightgrey";
        itemNames[i].style.fontWeight = "200";
        itemNames[i].parentNode.style.paddingTop = "5px";
        var itemImgDiv = itemNames[i].parentNode.querySelector(".item-img");
        if (itemImgDiv) {
          itemImgDiv.style.opacity = "0.2";
        }
      }
    }
  }
}

// Loop through each price array and apply styles
applyStylesToItems(List4);
applyStylesToItems(List3);
applyStylesToItems(List2);
applyStylesToItems(List1);
applyStylesToItems(List0);