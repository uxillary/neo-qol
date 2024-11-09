// ==UserScript==
// @name         [obj 14] Chooclate Factory
// @version      1.7
// @description  Highlights items, price key, added sound & refresh
// @namespace    https://github.com/uxillary/neo-qol
// @author       adamski @uxillary
// @match        https://www.neopets.com/objects.phtml?obj_type=14&type=shop
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

const refreshKey = 'refreshEnabled14'; // Key to track refresh state in localStorage
const minRefreshTime = 12001; // Minimum refresh interval (5 seconds)
const maxRefreshTime = 18601; // Maximum refresh interval (12 seconds)

// Load notification sound
const notificationSound = new Audio("https://raw.githubusercontent.com/uxillary/neo-qol/main/audio/chocolate.wav");
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

// List Items < 1,000 NP
const List0 = [
  "Angry Emoticon Hearts",
  "Aplets",
  "Avocado Gummy Korbat Tail",
  "Balloon-Shaped Ring Lolly",
  "Black Currant Scorchipop",
  "Blue Koi Lolly",
  "Blue Lab Jellies Candy",
  "Blueberry Candy Gavel",
  "Blueberry Gummy Korbat Tail",
  "Blueberry Lupe Hard Candy",
  "Blumaroo Sugar Skull",
  "Butterscotch Disc",
  "Candy Filled Negg",
  "Candy Fyora Face",
  "Candy Fyora Tiara",
  "Candy Fyora Wand",
  "Candy Pirate Earrings",
  "Caramel Cream Grarrl Foot",
  "Caramel Creams",
  "Caramel Juppie Beast",
  "Cherry Gummy Korbat Tail",
  "Cherry Shoyru Sweet",
  "Chilli-Coated Chokato Lollypop",
  "Choco Spray",
  "Chococherry Blumaroo Ears",
  "Chocolate Aisha Ears",
  "Chocolate Candy Filled Negg",
  "Chocolate Cannon Ball",
  "Chocolate Chia Candy",
  "Chocolate Chia Jam",
  "Chocolate Covered Caramel Corn",
  "Chocolate Covered Cherries",
  "Chocolate Covered Marshmallow Zafara",
  "Chocolate Cracker",
  "Chocolate Draik Lollypop",
  "Chocolate Gelert Heads",
  "Chocolate Grarrl on a Stick",
  "Chocolate Grarrl Tail",
  "Chocolate Gum",
  "Chocolate Ice Cream Gummy",
  "Chocolate Keyring",
  "Chocolate Lipstick",
  "Chocolate Peanuts With Peas",
  "Chocolate Seashell Sculpture",
  "Chocolate Siyana",
  "Chocolate Uni Print",
  "Chocolate Usuki",
  "Chocoon",
  "Chokato Gummy Chia",
  "Chokato Volcano",
  "Creamy Chocolate Pie",
  "Crunchy Chocolate Grarrl",
  "Crunchy Korbat Cookie",
  "Dark Chocolate Aisha",
  "Dark Chocolate Cybunny",
  "Dark Chocolate Draik",
  "Dark Chocolate Elephante",
  "Dark Chocolate Kougra Paw",
  "Dark Chocolate Lenny",
  "Dark Kiko Chocolates",
  "Dipped Orange Bonbon",
  "ErgyFruit Sour Saucer",
  "Felly Jelly Rainbow Candy",
  "Felly Jelly Red Candy",
  "Felly Jelly Yellow Candy",
  "Fire Candy Buttons",
  "Fire Candyfloss",
  "Fizzy Neocola Bottles",
  "Fruity Taffy",
  "Fun and Happytime Gum",
  "Gingerbread Korbat",
  "Glitter Star Candy",
  "Gnorbu Chocolate Dubloon",
  "Gooey Chocolate Grarrl",
  "Gooey Strawberry Grarrl",
  "Gooey White Chocolate Grarrl",
  "Grape Gummy Scorchio",
  "Grape Meerca Gobstopper",
  "Grape Usuki Gum",
  "Green Gummy Meerca",
  "Green Pear Drops",
  "Gummy Bow",
  "Honey and Mustard Jelly Beans",
  "Humbugs",
  "Ice Candy Buttons",
  "Iced Uni Cookie",
  "Icy Mint Jelly Beans",
  "Icy Mints",
  "Jelly Bean Filled Negg",
  "Jelly Bean Keyring",
  "Jelly Bean Pirate Chest",
  "Krawk Sugar Skull",
  "Kyrii Chocolate Dubloon",
  "Lemon Gummy Kiko",
  "Lemon Lupe Lollypop",
  "Lemon Pteripop",
  "Lemon Quiggle Pop",
  "Lemon Tulip Lollypop",
  "Lemon Tuskaninny Lolly",
  "Licorice Zafara Tail",
  "Lime Grundo Lollypop",
  "Lime Jelly Acara",
  "Lime Meerca Gobstopper",
  "Lolli Keyring",
  "Marshmallow Floud",
  "Marzipan Sugared Slorg",
  "Melon Chews",
  "Melted Chocolate Heart",
  "Melted Chocolate Negg",
  "Milk Chocolate Draik",
  "Milk Chocolate Eyrie",
  "Milk Chocolate Grarrl",
  "Milk Chocolate Korbat",
  "Milk Chocolate Peophin",
  "Milk Chocolate Rose",
  "Mint Chocolate Draik",
  "Mint Chocolate Grundo",
  "Mint Chocolate Kacheek",
  "Mint Chocolate Kau",
  "Mint Chocolate Koi",
  "Mint Chocolate Krawk",
  "Mint Chocolate Pteri",
  "Neotruffle",
  "Nutty Kiko Chocolates",
  "Orange Chocolate Hollow Chia",
  "Orange Chocolate Hollow Kacheek",
  "Orange Chocolate Kau",
  "Orange Chocolate Kiko",
  "Orange Chocolate Koi",
  "Orange Chocolate Korbat",
  "Orange Chocolate Moehog",
  "Orange Chocolate Mynci",
  "Orange Chocolate Nova",
  "Orange Chocolate Snowflake",
  "Orange Gummy Korbat Tail",
  "Orange Gummy Scorchio",
  "Orange Gummy Stamp",
  "Orange Usuki Gum",
  "Patterned Chocolate Negg",
  "Peppermint Praline Bar",
  "Pirate Hat Toffees",
  "Pirate Hook Candy Cane",
  "Purple Fizzy Gravel",
  "Rainbow Doughnutfruit Lolly",
  "Raspberry Jelly A",
  "Raspberry Swirl Grarrl Cookie",
  "Red Fizzy Gravel",
  "Rotten Egg Grarrl Gobstopper",
  "Salty Gumball",
  "Scorchio Sugar Skull",
  "Skeith Chocolate Dubloon",
  "Smoothie Shop Chocolate Charm",
  "Sssidney Lolly",
  "Star Lollipop",
  "Starberry Covered Dirt",
  "Strawberry Blumaroo Gummy Die",
  "Strawberry Draik Lollypop",
  "Strawberry Fondant Surprise",
  "Strawberry Koi Pop",
  "Strawberry Lupe Hard Candy",
  "Strawberry Mynci Lollypop",
  "Stupendous Strawberry Grarrl Gobstopper",
  "Tchea Krawkberry",
  "Tea Candy",
  "Thornberry Krawkberry",
  "Tigerfruit Krawkberry",
  "Toffee Eyrie on a Stick",
  "Tonu Horn on a Stick",
  "Usuki Gummy Faces",
  "Vanilla Ice Cream Gummy",
  "Walking Carpet Cotton Candy",
  "Wartroot Snorkle Lollypop",
  "White Chocolate Draik",
  "White Chocolate Grarrl Teeth",
  "White Chocolate Hollow Chia",
  "White Chocolate Kiko",
  "White Chocolate Korbat",
  "White Chocolate Kougra Paw",
  "White Chocolate Krawk",
  "White Chocolate Nimmo",
  "White Kiko Chocolates",
  "Wrapped Strawberry Candy",
  "Yurblegum",
  "Zeenana Krawkberry",
];

// List Items 2,000 - 5,000 NP
const List1 = [
  "Acara Jelly Pops",
  "Aisha Lollyswirl",
  "Apple Gummy Book",
  "Apple Gummy Chia",
  "Apple Gummy Lutari",
  "Apple Jelly Flotsam",
  "Apple Sugared Gelert Gummy",
  "Apple Wocky Candy Floss",
  "Asparagus Candy Cane",
  "Assorted Fruit Blocks",
  "Assorted Gummy Dice",
  "Assorted Gummy Quiggles",
  "Assorted Jelly Beans",
  "Balloon-Shaped Rainbow Candy",
  "Banana Achyfi Lollypop",
  "Banana Candy Rock",
  "Bar of Chocolate",
  "Black Currant Nimmo Bites",
  "Black Currant Quiggle Pop",
  "Black Licorice Hearts",
  "Black Sesame Seed Brittle",
  "Blobbule Snorkle Lollypop",
  "Blue Berry Tonu Hard Candy",
  "Blueberry Aisha Lollypop",
  "Blueberry Candy Cane",
  "Blueberry Flotsam Lollypop",
  "Blueberry Gummy Peophin",
  "Blueberry Jelly Flotsam",
  "Blueberry Sugared Slorg",
  "Blueberry Whirlpool Candy",
  "Box of Chocolate Chias",
  "Box of Chocolate Larnikins",
  "Box of Dung Chocolates",
  "Broken Heart Candy",
  "Candy Bouquet",
  "Candy Yurble Ears",
  "Candy Yurble Mane",
  "Candy Yurble Nails",
  "Candy Yurble Nose",
  "Candy Yurble Pants",
  "Candy Yurble Tail",
  "Caramel Dipped Skeith Wings",
  "Caramel Mynci Apple",
  "Cherry Aisha Lollypop",
  "Cherry Gummy Mace",
  "Cherry Peophin Lollypop",
  "Cherry Rose Lolly",
  "Cherry Sugared Slorg",
  "Chewy Licorice Aisha Ears",
  "Chilli-Coated Lime Lollypop",
  "Choco-Vanilla Korbat Cake",
  "Chocolate Cherry Moehog",
  "Chocolate Chia Lolly",
  "Chocolate Coated Lolly",
  "Chocolate Covered Lime Gummy Gem",
  "Chocolate Cybunny Paw",
  "Chocolate Dipped Pteri Tail",
  "Chocolate Draik Wing",
  "Chocolate Flakes",
  "Chocolate Kau Pat",
  "Chocolate Man",
  "Chocolate Mint Kougra",
  "Chocolate Moehog Coin",
  "Chocolate Moehogs",
  "Chocolate Negg",
  "Chocolate Psellia",
  "Chocolate Pteri Eggs",
  "Chocolate Ship Cookie",
  "Chocolate Spike Ball Candy",
  "Chocolate Swirl Nova",
  "Chocolate Turkey",
  "Chocolate Wocky Paws",
  "Chokato Candy Cane",
  "Chokato Gummy Korbat Tail",
  "Chunky Cherry Grarrl Gobstopper",
  "Cloud Flotsam Gumballs",
  "Coffee Candy",
  "Coltzan Candy",
  "Creme Filled Chocolate Negg",
  "Darigan Eyrie Paw Lolly",
  "Dark Chocolate Acara",
  "Dark Chocolate Blumaroo",
  "Dark Chocolate Gnorbu",
  "Dark Chocolate Hissi",
  "Dark Chocolate Ogrin",
  "Dark Chocolate Pteri",
  "Dark Chocolate Techo",
  "Dried Kumquat Sweets",
  "Economy Jelly Beans",
  "Elderberry Achyfi Lollypop",
  "Eyrie Chokatopop",
  "Eyrie Loveberripop",
  "Eyrie Plumberripop",
  "Felly Jelly White Candy",
  "Flying Saucers",
  "Fruitmallow Toffee Apple",
  "Fruity Gormball Gumball",
  "Fruity Korbites",
  "Furry Fury Grarrl Gobstopper",
  "Fyora Lollyswirl",
  "Gemmy Beans",
  "Giant Peppermint Lollipop",
  "Glowing Gelert Lollypop",
  "Grape Candy Rock",
  "Grape Grarrl Gummy",
  "Grape Wocky Candy Floss",
  "Grapefruit Gelert Lollypop",
  "Green Gummy Quiggles",
  "Green Lab Jellies Candy",
  "Grunion Fruit Gnorlolly",
  "Gummy Durian Chia",
  "Gummy Fish",
  "Gummy Gem Cupcake",
  "Gummy Hannah",
  "Gummy Pepper Chia",
  "Gummy Yoyo",
  "Hard Blumaroo Candy",
  "Hard Doughnutfruit Candies",
  "Heart Breath Mints",
  "Heart Shaped Box of Toffee",
  "Heart Shaped Chocolates",
  "Icy Heart Candy",
  "Jelly Lenny Beaks",
  "Jhudora Liquorice",
  "Jhudora Thorn Pops",
  "Kau Cookie",
  "Kyrii Pop",
  "Large Dark Chocolate Cybunny",
  "Large Milk Chocolate Cybunny",
  "Lemon Aisha Lollypop",
  "Lemon Bori Lolly",
  "Lemon Chia Treat",
  "Lemon Grarrl Gummy",
  "Lemon Nimmo Bites",
  "Lemon Sherbert Candy Cane",
  "Lemon Sugared Gelert Gummy",
  "Lime Bori Lolly",
  "Lime Candy Floss",
  "Lime Candy Rock",
  "Lime Gummy Book",
  "Lime Gummy Peophin",
  "Lime Jelly Blumaroo",
  "Lime Neodrops",
  "Lime Pteripop",
  "Lime Toffee Juppie",
  "Lime Whirlpool Candy",
  "Longan Lollypop",
  "Marshmallow Elephante",
  "Milk Chocolate A",
  "Milk Chocolate Aisha",
  "Milk Chocolate Elephante",
  "Milk Chocolate Hissi",
  "Milk Chocolate Hollow Cybunny",
  "Milk Chocolate Kiko",
  "Milk Chocolate Kougra",
  "Milk Chocolate Krawk Coin",
  "Milk Chocolate Kyrii",
  "Milk Chocolate Nimmo",
  "Milk Chocolate Pteri",
  "Milk Chocolate Scorchio",
  "Milk Chocolate Shoyru",
  "Mint Chocolate Gnorbu",
  "Mint Chocolate Spike Ball Candy",
  "Mint Jelly A",
  "Moonfruit Lollipop",
  "Mouldy Chocolate Heart",
  "Mynci Tail Lollypops",
  "Negg Chocolate",
  "Negg Lollipop",
  "Nova Breath Mints",
  "Oozing Chocolate Heart",
  "Orange Candy Floss",
  "Orange Chocolate Grarrl",
  "Orange Chocolate Jetsam",
  "Orange Chocolate Kacheek",
  "Orange Chocolate Kougra",
  "Orange Chocolate Lupe",
  "Orange Chocolate Pyramid",
  "Orange Chocolate Vandagyre",
  "Orange Fizzy Gravel",
  "Orange Gelert Lollypop",
  "Orange Gummy Book",
  "Orange Gummy Quiggles",
  "Orange Lemon Ribbon",
  "Orange Swirl Bonbon",
  "Orange Whirlpool Candy",
  "Outrageous Orange Grarrl Gobstopper",
  "Peach Gummy Lutari",
  "Peanut Brittles",
  "Peanut Butter Chocolate Shoyru",
  "Pink Lab Jellies Candy",
  "Pink Lenny Lollipop",
  "Rainbow Flotsam Lollypop",
  "Rainbow Gummy Die",
  "Rainbow Nata De Coco",
  "Raisin Nut Bar",
  "Raspberry Achyfi Lollypop",
  "Raspberry Gummy Skeith Tail",
  "Raspberry Neodrops",
  "Red Gummy Hearts",
  "Red Gummy Quiggles",
  "Red Nimmo Foot Lolly",
  "Reject Fire Mote Lolly",
  "Rock Candy",
  "Screlon Gnorlolly",
  "Sour Apple Lupe Hard Candy",
  "Sour Gummy Skeith Tail",
  "Starry Gormball Candy",
  "Starry Scorchio Lollypop",
  "Steam Train Gummies",
  "Stone Gummy Die",
  "Strawberry Achyfi Lollypop",
  "Strawberry Flotsam Lollypop",
  "Strawberry Grarrl Gummy",
  "Strawberry Heartcicle",
  "Strawberry Jelly Usul",
  "Strawberry Kacheek Drops",
  "Strawberry Sugared Slorg",
  "Strawberry Toffee Chokato",
  "Strawberry Wocky Candy Floss",
  "Strochal",
  "Strong Mints",
  "Sugar Aisha Skull",
  "Sugar Ixi Skull",
  "Sugared Elephante Feet",
  "Super Sticky Kacheek Candy Apple",
  "Swirly Chocolate Egg",
  "Swirly Chocolate Hissi",
  "Swirly Chocolate Mynci",
  "Tampered Bag of Sweets",
  "Tigerbuggle Chia Treat",
  "Toffee Apple",
  "Torpedos",
  "Twirly Fruit Daisy Lollypop",
  "Twirly Fruit Gnorlolly",
  "Usul Plush and Gumball Gift Set",
  "Usul Plush and Lolly Gift Set",
  "Valentines Heart Shaped Chocolate Box",
  "Vanilla Sugared Slorg",
  "Walking Carpet Chocolate",
  "Wartroot Jelly Beans",
  "Watermelon Jelicious",
  "White Chocolate Buzz",
  "White Chocolate Eyrie",
  "White Chocolate Hissi",
  "White Chocolate Kacheek",
  "White Chocolate Kougra",
  "White Chocolate Krawk Coin",
  "White Chocolate Kyrii",
  "White Chocolate Lenny",
  "White Chocolate Mynci",
  "White Chocolate Peophin",
  "White Chocolate Pteri",
  "White Chocolate Ruki",
  "White Chocolate Skeith",
  "White Chocolate Uni",
  "White Chocolate Wocky",
  "Wine Gums",
  "Yellow Gummy Quiggles",
];

// List Items 5,000 - 15k NP
const List2 = [
  "2 Scoops of Friendship",
  "Asparagus Chia Treat",
  "Assorted Pear Drops",
  "Assorted Tonu Chocolates",
  "Baby Cabbage Jelly Beans",
  "Baby Cybunny Chocolate Egg",
  "Banana Gummy Slorg",
  "Barbed Wire Black Licorice",
  "Blueberry Jelly Beans",
  "Blumaroo Cotton Candy",
  "Broken Cinnamon Hearts",
  "Bubblegum Cybunny",
  "Bubblegum Zafara",
  "Buzz Chocolate Bar",
  "Buzz Honey Lolly",
  "Candy Fyora Wings",
  "Candy Whistle",
  "Cashew Brittle",
  "Charcoal Jelly Beans",
  "Cherry Whirlpool Candy",
  "Chewy Strawberry Aisha Ears",
  "Chocolate Achyfi Lollypop",
  "Chocolate and Cream Kyrii",
  "Chocolate Balthazar",
  "Chocolate Banana Pteri Eggs",
  "Chocolate Cherry Pteri Eggs",
  "Chocolate Honey Buzz Bar",
  "Chocolate King Skarl",
  "Chocolate Lenny on a Stick",
  "Chocolate Moehog Head",
  "Chocolate Valentine Crossbow",
  "Chocolate Zafara",
  "Creamy Stick Biscuit",
  "Dark Chocolate Bruce",
  "Dark Chocolate Buzz",
  "Dark Chocolate Lutari",
  "Dark Chocolate Pellets",
  "Dark Chocolate Peophin",
  "Dark Chocolate Ruki",
  "Dark Chocolate Scorchio",
  "Dark Chocolate Shoyru",
  "Dark Chocolate Skeith",
  "Dark Chocolate Tuskaninny",
  "Destruct-O Chocolate Squares",
  "Dried Date Sweets",
  "Dried Longan Sweets",
  "Dried Lotus Root Sweets",
  "Fluff N Stuff Grarrl Gobstopper",
  "Gelert Tail Licorice",
  "Gold-Coated Choco Nuggets",
  "Gooseberry Snorkle Lollypop",
  "Grape Blumaroo Gummy Die",
  "Grape Gummy Book",
  "Grape Peophin Lollypop",
  "Green Apple Aisha Lollypop",
  "Gummy Aubergine Chia",
  "Half-eaten Candy Floss",
  "Heart Breath Mints",
  "Heart Lollipop",
  "Honeycomb Face Markings",
  "Jack-O-Lantern Pail",
  "Jelly Wocky",
  "Juppiemint Bar",
  "Kaia Lollipop",
  "Kikopop",
  "Korbat Sugar Skull",
  "Kougra Chocolate Dubloon",
  "Kougra Sugar Skull",
  "Large White Chocolate Cybunny",
  "Lemon Bumbluz Lolly",
  "Lemon Curd Gormball Truffle",
  "Lemon Pinchit Lollypop",
  "Lemon Sherbert Jelly Beans",
  "Lightning Bolt Lollypop",
  "Lime Grarrl Pop",
  "Mallowicious Bar",
  "Mega Minty Korbat Cake",
  "Melon-Berry Gummies",
  "Milk Chocolate Gnorbu",
  "Milk Chocolate Grundo",
  "Milk Chocolate Mynci",
  "Milk Chocolate Nova",
  "Milk Chocolate Tonu",
  "Milk Chocolate Tuskaninny",
  "Mint Chocolate Blumaroo",
  "Mint Chocolate Chia",
  "Mint Chocolate Krawk Coin",
  "Mint Chocolate Lupe",
  "Mint Chocolate Tuskaninny",
  "Mint Chocolate Usul",
  "Minty Chomby Lolly",
  "Mustard Mayhem Grarrl Gobstopper",
  "Neocola Bottles",
  "Orange Bori Lolly",
  "Orange Chocolate Grundo",
  "Orange Chocolate JubJub",
  "Orange Chocolate Kacheek",
  "Orange Chocolate Scorchio",
  "Orange Gummy Slorg",
  "Orange Lupe Hard Candy",
  "Peanut Butter Gormball Truffle",
  "Peophin Chocolate Medallion",
  "Peppermint Gormball Gumball",
  "Pineapple Cubes",
  "Pineapple Lollypop",
  "Pink Gormball Gumball",
  "Pink Lemonade Gummy Peophin",
  "Poison Heart Candy Apple",
  "Rainbow Elephante Lolly",
  "Rainbow Gelert Lollypop",
  "Rainbow Neodrops",
  "Raspberry and Vanilla Nova",
  "Raspberry Chocolate Tuskaninny",
  "Red Buzz Lolly",
  "Root Beer Barrels",
  "Rose Lollyswirl",
  "Rosy Apples",
  "Shape-Shifting Maltose Candy",
  "Sherbert Lemons",
  "Sour Lemon Lolly",
  "Stone Gummy Die",
  "Strawberry Chocolate Krawk Coin",
  "Strawberry Meerca Lolly",
  "Strawberry Neodrops",
  "Strawberry Tuskaninny Lolly",
  "Sweet Baked Beans",
  "Sweet Love Messages Candy",
  "Sweet Necklace",
  "Swirly Mint Mynci",
  "Toffee Dubloon",
  "Tooth Faerie Sweets",
  "Uni Sugar Skull",
  "Valentines Chocolate Selection",
  "Waffle Cone Heart Headband",
  "Walking Carpet Lolly",
  "Whipped Frosting Shirt",
  "White Blackberry Candy",
  "White Chocolate Gnorbu",
  "White Chocolate Nova",
  "White Chocolate Pellets",
  "Wintermelon Sweets",
  "Yellow Candy Buttons",
  "Yellow Lab Jellies Chocolate Bar",
  "Yellow Techo Pop",
];

// List Items 15k - 100k NP
const List3 = [
  "Apple and Custard Drops",
  "Banana Jelly Flotsam",
  "Barbed Wire Black Licorice",
  "Blue Raspberry Aisha Lollypop",
  "Blueberry Gummy Stamp",
  "Candy Heart Necklace",
  "Cherry Aboogala Lolly",
  "Cherry Mootix Lollypop",
  "Chocolate Blossom",
  "Chocolate Bow",
  "Chocolate Jeran",
  "Chocolate Maractite Coins",
  "Chocolate Ruki Kit",
  "Codestone Truffle",
  "Dark Chocolate Poogle",
  "Dark Chocolate Zafara",
  "Gnorbu Gum",
  "Gnorbu Lollipop",
  "Grape Gummy Slorg",
  "Heart Shaped Bon Bons",
  "Juppiemint Bar",
  "Kau Sundae",
  "Large Swirly Chocolate Cybunny",
  "Lime Skidget Lolly",
  "Lost City Lanes Lime Gobstopper",
  "Milk Chocolate Kacheek",
  "Miniature Chocolate Chocolate Factory",
  "Mint Chocolate Peophin",
  "Minty Choccywhip",
  "Neverending Jar of Jellybeans",
  "Nutty Chocolate Negg",
  "Orange Chocolate Tuskaninny",
  "Sludge Filled Jelly Beans",
  "Strawberry Techo Pop",
  "Sugar Moehog Skull",
  "Ummagine Candy Cane",
  "White Chocolate Lutari",
  "Yewfruit Candy",
];

// List Items > 100k NP
const List4 = [
  "Angry Candy",
  "Apple Moquot Lollypop",
  "Berry Sugared Gelert Gummy",
  "Blueberry Lime Gormball Candy",
  "Blueberry Sugared Gelert Gummy",
  "Bullseyes",
  "Candy Cane Chocolate Advent Calendar",
  "Caramel and Custard Drops",
  "Caramel Kiko Sweets",
  "Cherry Meerca Gobstopper",
  "Chilli Chocolate",
  "Chocolate Advent Calendar",
  "Chocolate Chia Cookie",
  "Chocolate Crown of Sinsi",
  "Chocolate Crown of the Faeries",
  "Chocolate Cybunny Negg",
  "Chocolate Dr Sloth",
  "Chocolate Gobstopper",
  "Chocolate Honey",
  "Chocolate Ixi Leaf",
  "Chocolate Moltenore",
  "Chocolate Orange Easter Negg",
  "Chocolate Peach",
  "Confetti Cookie Beret",
  "Creamy Choccywhip",
  "Dark Chocolate Chia",
  "Dark Chocolate Hearts",
  "Deluxe Strawberry Toffee Chokato",
  "Double Chocolate Jelly Beans",
  "Draik Sugar Skull",
  "ErgyFruit Jelly Beans",
  "Fishy Delight Grarrl Gobstopper",
  "Hazelnut Whirl",
  "Holiday Bell Chocolate Advent Calendar",
  "Lemon and Lime Easter Negg",
  "Lemon Bon Bons",
  "Luxury Chocolate Easter Negg",
  "Marshmallow Plumpy",
  "Mint Chocolate Easter Negg",
  "Omnipotent Onion Grarrl Gobstopper",
  "Orange Lightmite Lollypop",
  "Orange Scoach Lolly",
  "Pretty Pink Easter Negg",
  "Rainbow Candy Floss",
  "Sniddberry Meerca Gobstopper",
  "Snowflake Chocolate Advent Calendar",
  "Spicy Tropical Fruit Ice Pop Handheld",
  "Spooky Flying Doughnut",
  "Spotted Easter Negg",
  "Strawberries and Cream Dress",
  "Strawberries and Cream Easter Negg",
  "Sugar Tonu Skull",
  "Super Spicy Jelly Beans",
  "Yummy Drops",
];

// Display a Key on page
// To Do

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