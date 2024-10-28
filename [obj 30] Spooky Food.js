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

const refreshKey = 'refreshEnabled'; // Key to track refresh state in localStorage
const minRefreshTime = 4001; // Minimum refresh interval (4 seconds)
const maxRefreshTime = 11601; // Maximum refresh interval (11 seconds)

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

// List Items < 700 NP
const List0 = [
  "Almost Gummy Rat (Strawberry)",
  "Blumaroo Steak",
  "Bone Dog",
  "Cannibalistic Pumpkin",
  "Chilled Eyeball Custard",
  "Chilled Eyes with Clam Sauce",
  "Chocolate Ice Cream Apple Lantern",
  "Chocolate Korbat Ice Lolly",
  "Chokato Ghostkersandwich",
  "Clawmatoe",
  "Crispy Pumpkin Chips",
  "Deviled Eggs",
  "Deviled Steak",
  "Eliv Thade Chips",
  "Eliv Thade Sandwich",
  "Glaring Eye Wrap",
  "Grundo Stix",
  "Haunted Milk",
  "Jellied Eyeballs",
  "Large Grundo Toe With Lint Side Order",
  "Mummified Ice Cream",
  "Octornapie",
  "Peanut Butter Spiders",
  "Pumpkin Cookies",
  "Pumpkin Pie",
  "Pumpkin Slice",
  "Roast Tentacle",
  "Scary Soup",
  "Skeith Juice Cocktail",
  "Slime Ghostkersandwich",
  "Slime Sundae",
  "Slimesicle",
  "Snail Cream Cone",
  "Snorkle Pudding",
  "Spaghetti and Eyeballs",
  "Spectral Cinnamon Rolls",
  "Spooky Doughnut",
  "Spooky Gooplecream",
  "Spooky Raspberry Pie",
  "Spooky Shake",
  "Squishy Brain Wrap",
  "Sun Dried Techo Claw",
  "Tongue with Veggies",
  "Undead Celery",
  "Undead Turnip",
  "Zombie Marshmallows",
];

// List Items 1,900 - 4,000 NP
const List1 = [
  "Aggressive Casserole",
  "Angry Marshmallows",
  "Baked Intesteen",
  "Beast Burger",
  "Bleeding Heart Jelly Sundae",
  "Brain Candy Mix",
  "Candy Corn Classic",
  "Candy Corn Fizzy Drink",
  "Carnivorous Carved Pumpkin",
  "Cheese Ghostkersandwich",
  "Chocolate Graveyard Cake",
  "Coffin Cake",
  "Count Cross Buns",
  "Creepy Spring Salad",
  "Cress Ghostkersandwich",
  "Crunch Chocolate Scoaches",
  "Cup of Pustulence",
  "Eyeball Slushie",
  "Festering Coffee",
  "Finger Sandwiches",
  "Fried Worm Stew",
  "Frothy Fruit Juice",
  "Ghost Marshmallows",
  "Glaring Cheesecake",
  "Gooey Bug Soup",
  "Gravy Nightmare",
  "Gummi Worms",
  "Halloween Jinjah Platter",
  "Ichor Ghost Toast",
  "Korbat Wing Soup",
  "Macawormi and Cheese",
  "Magic Ghost Marshmallows",
  "Mint Ice Cream Apple Lantern",
  "Mystery Meat Sandwich",
  "Pickled Eyeballs",
  "Pumpkin Chip Surprise",
  "Roast Lizard Eggs",
  "Slime Soup",
  "Slime-Frosted Pretzel",
  "Spooky Lime Pudding",
  "Undead Broccoli",
  "Vanilla Ghost Cake",
  "Wormy Pasta",
];

// List Items 4,000 - 40,000 NP
const List2 = [
  "Army of Undead Cupcakes",
  "Bat Kebab",
  "Berried in Bread",
  "Bloody Ghost Toast",
  "Bloopcream",
  "Blooppop",
  "Blumaroo Tail Salad Extravaganza",
  "Bone-Chilling Bacon",
  "Brains and Dumplings",
  "Cadaverous Cola",
  "Candy Corn Stuffed Pumpkin",
  "Candy Skull",
  "Cheese Puff Fingers",
  "Chocolate Jack-O-Lantern Chip Cookie",
  "Coffee of the Dead",
  "Cole Slaughter",
  "Cookie Hats",
  "Crunchy Tooth Surprise",
  "Crypt Crisps",
  "Deadly Apple Pie",
  "Deep Fried Ghosts",
  "Disgruntled Candy Corn",
  "Droolik Surprise",
  "Eerie Eggs",
  "Elephante Trunk Stew",
  "Eye of Mortog Soup",
  "Eyeball and Worm Sandwich",
  "Eyeball Stew Cake",
  "Eyewich",
  "Fright Pop",
  "Ghost Burger",
  "Ghost Mashed Potato",
  "Ghost Meepmallows",
  "Ghost Puff",
  "Ghostmallow Smore",
  "Hair Stuffed Maggot",
  "Haunted Pumpkin Bar",
  "Haunted Salad",
  "Holiday Eye Candy",
  "Holiday Ghostpuff",
  "Holiday Gingerbread Mansion",
  "Holiday Spoiled Neggnog",
  "Horror Doeuvres",
  "Impasta Spaghetti and Meatballs",
  "Intesteen Casserole",
  "Intestines and Marinara",
  "Lizarkagna",
  "Marshmallow and Slime Souffle",
  "Meatloathe",
  "Menacing Brew",
  "Pink Spooky Floss",
  "Psimouse Cake",
  "Pumpkin Ice Cream",
  "Pumpkin Pot Pie",
  "Pumpkin Scoopings",
  "Refreshing Barrel Water",
  "Rest in Pea Soup",
  "Rest in Peace of Chicken",
  "Roast Worm with Cranberries",
  "Saus-Rage",
  "Slime Cream",
  "Slimy Pumpkin Soup",
  "Snorkle Snout",
  "Spooky Donuts",
  "Spooky Ghostbeef",
  "Spooky Handwich",
  "Spyder Eggs",
  "Spyder Muffins",
  "Strawberry Ice Cream Apple Lantern",
  "This Isnt Chili Cheese Fries",
  "Turkey Monster",
  "Twice-Baked Spiked Potato",
  "Vanilla Ice Cream Apple Lantern",
];

// List Items 
const List3 = [

];

// List Items 40k +
const List4 = [
  "Apple Lantern",
  "BluePepper Porridge",
  "Bogie Berry",
  "Brain Ice Cream",
  "Chocolate Coated Eye",
  "Coco Pumpkin",
  "Crunchy Snotball",
  "Disturbing Gelatin",
  "Ednas Spooky Brew",
  "Elderly Apple",
  "Forgotten Apple",
  "Gorerito",
  "Grundo Toe Lint",
  "Halloween Candy Cane",
  "Halloween Oranges",
  "Jalapeno Cheese Nightmare",
  "Jelly Finger",
  "Jelly Spider Eyeball",
  "Marshmallow and Slime Souffle",
  "Meerca Pie",
  "Mouldy Cheese",
  "Parts on a Pizza",
  "Pink Apple Lantern",
  "Pink Spooky Ice Cream",
  "Pink Spooky Popcorn",
  "Poison Apples",
  "Quiggle Pie",
  "Raspberry Ghostkerchief Jelly",
  "Rotting Veggies Salad",
  "Runny Snot",
  "Sponge Apple",
  "Spoooky Muffin",
  "Steamed Ectoplasm",
  "The Stuff",
  "Wing of Korbat",
  "Worm Stew",
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
        < 700 np
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; background-color: #fff; margin-right: 5px;"></div>
        700 - 1,900
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; border: 1px dotted green; margin-right: 5px;"></div>
        1,900 - 4,000
    </div>
    <div style="display: flex; align-items: center; margin-bottom: 6px;">
        <div style="width: 12px; height: 12px; border: 1px solid orange; margin-right: 5px;"></div>
        4,000 - 40k
    </div>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 2px dashed red; margin-right: 5px;"></div>
        40k - 500k
    </div>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 2px solid red; margin-right: 5px; margin-top: 5px;"></div>
        500k +
    </div>
`;

    // Append the price key div to the body
    document.body.appendChild(keyDiv);
})();

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
        itemNames[i].parentNode.style.border = "5px solid red";
        itemNames[i].parentNode.style.padding = "5px";
        itemNames[i].parentNode.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.2)";
        itemNames[i].style.color = "red";
        itemNames[i].style.fontWeight = "800";
        itemNames[i].style.textDecoration = "underline";
      } else if (itemArray === List3) {
        // Red Dashed
        notificationSound.play(); // Play sound
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