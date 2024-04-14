// ==UserScript==
// @name         Hide-genimpMap-Stuff
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Simen HI
// @match        *://*.genshin-impact-map.appsample.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    var rightbar = document.querySelector(".MapLayout_Rightbar ");

    if (rightbar){
        rightbar.style.display = "none";
    }
});
