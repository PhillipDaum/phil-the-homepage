import projects from "../data/data.js"

// does correct function for each page
let whereAt = window.location.href.split("/");
let currentPage = whereAt[whereAt.length - 1];
if (currentPage === "index.html") {
  window.addEventListener('DOMContentLoaded', displayCards, false);
} else if (currentPage === "javascript.html") {
  console.log("doodoo")
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
// Mad Libs
const madlibForm = document.getElementById("madlib-form");
madlibForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

	// //above is boiler plate code
	// userArray.push(dataObject);
	// console.log(userArray);
	madlibForm.reset();
}

// function makeMadlib()


const madlib = `
In a ${adjective1} tech utopia, a coder named ${humanName} always wore their ${adjective2} hat and sipped ${noun1}. One day, they discovered a ${noun2} that could ${verb1} anything!
With this power, ${humanName} started ${verbEndingInIng} all the ${pluralNoun1}, quickly becoming the "${adjective3} Coder." Then, a ${adjective4} ${animal} warned them about the evil ${villainName}. Grabbing their trusty ${noun3}, ${humanName} set off to defeat ${villainName}.
After solving ${adjective5} puzzles, ${humanName} triumphed. The ${place} was ${adjective6} again, and everyone celebrated by dancing the ${funnyDanceMove}.
`;
console.log(madlib);