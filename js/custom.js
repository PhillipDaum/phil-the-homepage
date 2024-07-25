// shows and hides hamburger menu on mobile
document.querySelector(".burger-button").addEventListener("click", showHamburger);
const burger = document.querySelector(".burger-button i");
const navUl = document.querySelector(".nav");
const nav = document.querySelector("nav")
;function showHamburger() {
  burger.classList.toggle("fa-times");
  navUl.classList.toggle("nav-active");
  // there is a small bug if the side menu is out then the user makes it big while its out
}


// MAYBE I CAN DO SOMETHING here that will fix the tiny bug where if you expand it while the hamburger menu is ouy



