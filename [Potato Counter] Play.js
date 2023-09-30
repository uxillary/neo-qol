// ==UserScript==
// @name         [Potato Counter] Play
// @version      1.0
// @description  30/09/2023 Fills in the correct answer (does not auto-submit)
// @namespace    https://github.com/uxillary/NeoQOL/
// @author       adamski @uxillary
// @match        https://www.neopets.com/medieval/potatocounter.phtml
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @run-at	     document-end
// @grant        none
// ==/UserScript==

// If you get the long potato list, just refresh and move on.

var images = document.querySelectorAll("td img");
var amount = Array.from(images).filter(img => img.src.includes('potato')).length - 1;
document.querySelector("input[name='guess']").value = amount;


