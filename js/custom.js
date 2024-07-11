import projects from "../data/data.js"

console.log("get it")
console.log(projects)

//displays projeccts as cards
function displayCards() {
    console.log("yo")
    for (let item of projects) {
        console.log("HeLL0000")
        let makeCard = document.createElement("div");
        makeCard.className = "card";
        makeCard.innerHTML = `
        <h4>${item.title}</h4>
        <img src=${item.image} alt="${item.imageAlt}">
        <p>${item.description}</p>
        `
        // is this right?
        document.querySelector(".card-wrapper").appendChild(makeCard);
    }
}
displayCards()