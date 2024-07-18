import projects from "../data/data.js"

// displays projects as cards
function displayCards() {
    for (let item of projects) {
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        // can add link to both the repo and the hosted site
        makeCard.innerHTML = `
        <h4>${item.title}</h4>
        <a href="${item.gitHubPages}"><img src=${item.image} alt="${item.imageAlt}"></a>
        <p>${item.description}</p>
        <div class="socials">
          <a href="${item.gitHub}" target="_blank"><i class="fa-brands fa-square-github"></i></a>
          <a href="${item.gitHubPages}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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
const navUl = document.querySelector(".nav");
const nav = document.querySelector("nav")
;function showHamburger() {
  burger.classList.toggle("fa-times");
  navUl.classList.toggle("nav-active");
  // fixed bug, now tiny bug, if the side menu is out and user makes it big again
  nav.style.display = "block";
}