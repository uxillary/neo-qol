// ==UserScript==
// @name         [obj 20] Tropical Food Shop
// @version      1.5
// @description  Highlights items, price key
// @namespace    https://github.com/uxillary/neo-qol
// @author       adamski @uxillary
// @match        https://www.neopets.com/objects.phtml?obj_type=20&type=shop*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// List Items < 700 NP (Highlight as Lightgrey)
const List0 = [
  "Tagobo Potion",
  "Corn Balls",
  "Drillaroot",
  "Flatfruit Lollypop",
  "Melowhirl",
  "Jug of Fresh Phearade",
  "Famous Crab Burger",
  "Star Fish Sandwich",
  "Fruitmallow Grog",
  "Larfle",
  "Apple Fruit Pancakes",
  "Mutant Tigersquash",
  "Twirly Fruit Grog",
  "Blueberry Fruit Pancakes",
  "Nolafruit",
  "Azzle Salad",
  "Hanging Fruit Basket",
  "Snowberry Crepe",
  "Chokato Crepe",
  "Strawberry Fruit Pancakes",
  "Slice of Lemoran Pie",
  "Tigerbuggle Fruit Pancakes",
  "Zeenana Crepe",
  "Tigersquash Crepe",
  "Pickled Eel",
  "Thornberry Crepe",
  "Small Fruit Basket",
  "Flatfruit Fruit Leather Socks",
  "Islandberry Tea",
  "Lesser Bearded Plantfruit"
];

// List Items > 1,900 - 4,500 NP (Highlight as Green)
const List1 = [
  "Azzle Sauce",
  "Seafood Twist",
  "Purpanna",
  "Kougra Blurf Shake",
  "Lemoran Fruit Leather Socks",
  "Taokicarrot",
  "Kougra Nolafruit Shake",
  "Shrimptail with Kelp Sauce",
  "Star Fish Sundae",
  "Azzle",
  "Banango Bread",
  "Flatfruit Shake",
  "Grunion Fruit Shake",
  "Poached Pearange",
  "Islandberry",
  "Coconut Cocktail",
  "Froozle",
  "Chrysaberry Seashell",
  "Dragato",
  "Juicy Warterberry",
  "Maraquan Gumbo",
  "Mixed Berries Pancake",
  "Skrazapod",
  "Squirming Salad",
  "Turnla Pie",
  "Fungi Fruit Scone",
  "Ugnot",
  "Ellecha",
  "Sliced and Pickled Duoroot",
  "Crescent Moonfruit",
  "Owabit",
  "Ripe Bomberry",
  "Wingafruit",
  "Banango Punch",
  "Kougra Owabit Shake",
  "Triapple",
  "Explodamelon",
  "Grey Scorchipepper",
  "Tetraberry",
  "Hot Skrazzle",
  "Pluburb",
  "Red Goparokko Fruit",
  "Sliced and Pickled Azzle",
  "Scalefruit",
  "Chilled Seaweed Cone",
  "Jummie Roll",
  "Oranella",
  "Seaweed Lasagne",
  "Draikfruit",
  "Chilled Kelp Cone",
  "Papaya with Seaweed",
  "Scabergy Seashell",
  "Grootafruit",
  "Splibean",
  "Braised Lotus Root",
  "Spiraberry",
  "Kelp Lasagne",
  "Duoroot",
  "Islandberry Ice Cream",
  "Turihar Berry",
  "Boingari",
  "Fuzzinberry",
  "Pearange",
  "Boingari Mince Pie",
  "Green Octopepper",
  "Heart Shaped Fruit Cake",
  "Cocoalatte Fruit Leather Socks",
  "Lemoran",
  "Turihar Berry Coconut Milk",
  "Grunion Fruit Grog",
  "Jug of Fresh Juppieade",
  "Scrampi Salad",
  "Scalemelon",
  "Sliced and Pickled Pimplepepper",
  "Red Octopepper",
  "Galaxia Berries",
  "Mango Crab Salad",
  "Splaash",
  "Goparokko Fruit Punch",
  "Pineapple Breeze",
  "Frozen Prawn Delight"
];

// List Items 4,500 - 40,000 (Highlight as Orange)
const List2 = [
  "Frozen Prawn Delight",
  "Koyle Fruit Grog",
  "Trapango",
  "Summerberry",
  "Gleenut",
  "Flarble",
  "Flatfruit Tuskaninny Ice Cream",
  "Wicker Fruit Cornucopia",
  "Zalacca Fruit",
  "Perimontwist",
  "Thornata",
  "Melonberry",
  "Stone Fruit",
  "Tasty Tiki Trees",
  "Wertholoupe",
  "Goparokko Island Fruit",
  "Tigerfruit Toffee Apple",
  "Vegan Grenanna Mousse Cake",
  "Myncibean Punch",
  "Strawberry Doughnutfruit",
  "Pluburb Pie",
  "Banango Toffee Apple",
  "Prickly Doughnutfruit",
  "Blurf Mince Pie",
  "Prickapome",
  "Qanfire Fruit",
  "Agueena",
  "Chocolate Orange Volcano",
  "Cramjar",
  "Frootafruit",
  "Spotkato",
  "Lobster Berry Surprise",
  "Shebberries",
  "Blurf",
  "Greengage Breeze",
  "Seedless Skeem Jam",
  "Coconut Fruit Cup",
  "Blue Cocofizz",
  "Munuberry Coconut Milk",
  "Vinarok",
  "Seafood Pasta Salad",
  "Seven Layer Mousse",
  "Stuffed Penupe",
  "Jug of Fresh Lemoranade",
  "Moonfruit",
  "Blobbule"
];

// List Items (Highlight as Red)
const List3 = [

];

// List Items > 40,000 NP + (Highlight Red BOX)
const List4 = [
  "Golden Juppie",
  "Vanilla Tea",
  "Cloudberry",
  "Goparokko Fish Surprise",
  "Mano Root",
  "Honeyplume",
  "Crater Fruit",
  "Arnapple",
  "Octoberry",
  "Blurf Coconut Milk",
  "Pink Peachpa Cooler",
  "Banango",
  "Tetraberry Tea",
  "Darttlefruit",
  "Glowleaf Tea",
  "Aggleroot",
  "Acnefruit",
  "Fruity Swirl Souffle",
  "Astranna",
  "Appriberry",
  "Flamear",
  "Clemango",
  "Gelupepper",
  "Strawberry Salmon",
  "Chrysanberry",
  "Tigerbuggles",
  "Bell Apple",
  "Fresh Lobster Tail",
  "Lavaberry",
  "Berrybiscus Tartlet",
  "Krakuberries",
  "ErgyFruit",
  "Tigerfruit",
  "Roe Sushi",
  "Anemoneberry",
  "Strong Berry",
  "Cornupepper",
  "Chokato",
  "Doughnutfruit",
  "Thornberry",
  "Vein Cabbage",
  "Phear",
  "Icy Doughnutfruit",
  "Tigersquash",
  "Ugly Pinanna",
  "Zeenana",
  "Simmered Tropical Fruit Bowl",
  "Pinanna Plus",
  "Bludberry",
  "Songray",
  "Blue Doughnutfruit",
  "Bubbling Kraku Thickshake",
  "Rainbow Doughnutfruit",
  "Checkered Doughnutfruit",
  "Pink Chokato",
  "Purple Doughnutfruit",
  "Sponge Doughnutfruit",
  "Fiery Doughnutfruit",
  "Fish Doughnutfruit",
  "Purple Juppie Slurpbowl",
  "Green Chyrsaberry",
  "Tigermelon",
  "Strange Pinanna",
  "Evil Pinanna",
  "Marafalop",
  "Yellow Doughnutfruit",
  "Golden Doughnutfruit",
  "Green Doughnutfruit",
  "Silver Doughnutfruit",
  "Zibblifruit"
];


(function() {
    'use strict';

    // Create the div element
    var keyDiv = document.createElement('div');

    // Set styles to make it subtle and fixed to the right side
    keyDiv.style.position = 'fixed';
    keyDiv.style.top = '180px';
    keyDiv.style.right = '8px';
    keyDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    keyDiv.style.border = '1px solid #ccc';
    keyDiv.style.padding = '10px';
    keyDiv.style.fontSize = '11px';
    keyDiv.style.fontFamily = 'Arial, sans-serif';
    keyDiv.style.zIndex = '1000';
    keyDiv.style.width = '150px';
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

    // The content of the key
    keyDiv.innerHTML = `
    <div style="display: flex; align-items: center;">
    <strong>- Price Key -</strong></center><br><br>
    </div>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background-color: #f1f1f1; margin-right: 5px;"></div>
        < 700 NP
    </div><br>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; background-color: #fff; margin-right: 5px;"></div>
        700 - 1,900 NP
    </div><br>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 1px dotted green; margin-right: 5px;"></div>
        1,900 - 4,500 NP
    </div><br>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 1px solid orange; margin-right: 5px;"></div>
        4,500 - 40,000 NP
    </div><br>
    <div style="display: flex; align-items: center;">
        <div style="width: 12px; height: 12px; border: 2px solid red; margin-right: 5px;"></div>
        40,000 NP +
    </div>
`;

    // Append the div to the body
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
        // For SpookyFood4, Thick Red
        itemNames[i].parentNode.style.border = "4px solid red";
        itemNames[i].parentNode.style.padding = "4px";
        itemNames[i].style.color = "red";
        itemNames[i].style.textDecoration = "underline";
        // Insert square brackets
        itemNames[i].textContent = "[[" + itemName + "]]";
      } else if (itemArray === List3) {
        // For SpookyFood3, Red Bold
        itemNames[i].style.color = "red";
        itemNames[i].style.textDecoration = "underline";
        itemNames[i].parentNode.style.border = "2px solid red";
        itemNames[i].parentNode.style.padding = "2px";
      } else if (itemArray === List2) {
        // For SpookyFood2, Orange
        itemNames[i].style.color = "orange";
        itemNames[i].style.textDecoration = "underline";
        itemNames[i].parentNode.style.border = "2px dotted orange";
        itemNames[i].parentNode.style.padding = "2px";
      } else if (itemArray === List1) {
        // For SpookyFood1, Green
        itemNames[i].style.color = "green";
        itemNames[i].style.textDecoration = "underline";
        itemNames[i].parentNode.style.border = "1px dotted green";
        itemNames[i].parentNode.style.padding = "2px";
       } else if (itemArray === List0) {
        // For SpookyFood0, Grey
        itemNames[i].style.color = "lightgrey";
        itemNames[i].style.fontWeight = "normal";
        // Change the opacity
        var itemImgDiv = itemNames[i].parentNode.querySelector(".item-img");
        if (itemImgDiv) {
          itemImgDiv.style.opacity = "0.2";
        }
      }
    }
  }
}

// Loop through each SpookyFood array and apply styles
applyStylesToItems(List4);
applyStylesToItems(List3);
applyStylesToItems(List2);
applyStylesToItems(List1);
applyStylesToItems(List0);