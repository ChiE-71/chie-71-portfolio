const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo");
const navMenu = document.getElementById("nav-menu");
const navList = document.querySelector(".nav-list");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (menuOpen == false) {
    navMenu.style.display = "flex";
    navMenu.classList.remove("floatUp");
    navMenu.classList.add("floatDown");
    menuOpen = true;
  }
});

navList.addEventListener("click", () => {
  if (menuOpen == true) {
    navMenu.classList.remove("floatDown");
    navMenu.classList.add("floatUp");
    setTimeout(function() {navMenu.style.display = "none"}, 350);
    menuOpen = false;
  }
});