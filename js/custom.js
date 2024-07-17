import projects from "../data/data.js"

// displays projects as cards
function displayCards() {
    for (let item of projects) {
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        // can add link to both the repo and the hosted site
        makeCard.innerHTML = `
        <h4>${item.title}</h4>
        <img src=${item.image} alt="${item.imageAlt}">
        <p>${item.description}</p>
        <div class="socials">
          <a href="${item.gitHub}"><i class="fa-brands fa-square-github"></i></a>
          <a href="${item.gitHubPages}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        `
        document.querySelector(".card-wrapper").appendChild(makeCard);
    }
}
displayCards()

// shows and hides hamburger menu on mobile
// the event listner way seems to work better then adding onclick in html when using modules in JS
document.querySelector(".burger-button").addEventListener("click", showHamburger);
const burger = document.querySelector(".burger-button i");
const nav = document.querySelector(".nav");
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}