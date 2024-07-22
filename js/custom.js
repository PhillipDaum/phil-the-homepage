// shows and hides hamburger menu on mobile
document.querySelector(".burger-button").addEventListener("click", showHamburger);
const burger = document.querySelector(".burger-button i");
const navUl = document.querySelector(".nav");
const nav = document.querySelector("nav")
;function showHamburger() {
  burger.classList.toggle("fa-times");
  navUl.classList.toggle("nav-active");
  // fixed bug, now tiny bug, if the side menu is out and user makes it big again
  nav.style.display = "block";
}






