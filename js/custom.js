import projects from "../data/data.js"

// displays projects as cards
function displayCards() {
    for (let item of projects) {
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        makeCard.innerHTML = `
        <h4>${item.title}</h4>
        <img src=${item.image} alt="${item.imageAlt}">
        <p>${item.description}</p>
        `
        document.querySelector(".card-wrapper").appendChild(makeCard);
    }
}
displayCards()

// shows and hides hamburger menu on mobile
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}