import "./styles.css";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.getElementById("content");

let clearContent = function () {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  return;
};

let homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  clearContent();
  loadHome();
});

let menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

let aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
    clearContent();
    loadAbout();
})

loadHome();
