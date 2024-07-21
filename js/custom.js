import projects from "../data/data.js"

// for javascript page
const madlibForm = document.getElementById("madlib-form");

// does correct function for each page
// avoids error
let whereAt = window.location.href.split("/");
let currentPage = whereAt[whereAt.length - 1];
if (currentPage === "index.html") {
  // does it need the false at the end?
  window.addEventListener('DOMContentLoaded', displayCards, false);
} else if (currentPage === "javascript.html") {
  madlibForm.addEventListener("submit", onFormSubmit);
  // all the functions here
}

// MAIN PAGE
// displays projects as cards
function displayCards() {
    for (let item of projects) {
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        // can add link to both the repo and the hosted site
        makeCard.innerHTML = `
        <h4>${item.title}</h4>
        <a href="${item.gitHubPages}" target="_blank"><img src=${item.image} alt="${item.imageAlt}"></a>
        <p>${item.description}</p>
        <div class="socials">
          <a href="${item.gitHub}" target="_blank"><i class="fa-brands fa-square-github"></i></a>
          <a href="${item.gitHubPages}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        `
        document.querySelector(".card-wrapper").appendChild(makeCard);
    }
}


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

// JAVASCRIPT PAGE
// Mad Libs - there is one little bit at the top!
function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
  const madlib = `
  in a ${dataObject.adjective1} tech utopia, a coder named ${dataObject.humanName} always wore their ${dataObject.adjective2} hat and sipped ${dataObject.noun1}. One day, they discovered a ${dataObject.noun2} that could ${dataObject.verb1} anything!
  With this power, ${dataObject.humanName} started ${dataObject.verbEndingInIng} all the ${dataObject.pluralNoun1}, quickly becoming the "${dataObject.adjective3} Coder." Then, a ${dataObject.adjective4} ${dataObject.animal} warned them about the harmful ${dataObject.villainName}. Grabbing their trusty ${dataObject.noun3}, ${dataObject.humanName} set off to defeat ${dataObject.villainName}.
  After solving ${dataObject.adjective5} coding puzzles, ${dataObject.humanName} triumphed. The ${dataObject.place} was ${dataObject.adjective6} again, and everyone celebrated by dancing the ${dataObject.funnyDanceMove}!
  `;
  console.log(madlib);
  document.querySelector(".madlib-story").textContent = madlib;
  
  // it will update the dom, maybe fade or clear from the last thing and show a little page with the thing. 

	madlibForm.reset();
}



