import "./styles.css";

import {loadAbout} from "./about.js";
import {loadMenu} from "./menu.js"

const content = document.getElementById("content")

let clearContent = function(){
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
    return;
}

let homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", () => {
    clearContent();
    loadAbout();
})

let menuBtn = document.getElementById("menu-btn")
menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
})


loadAbout();