import projects from "../data/data.js"


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
displayCards();