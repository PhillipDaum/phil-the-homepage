// buttons show and hide respective sections
const madlibArea = document.querySelector(".madlib-wrapper");
const timeArea = document.querySelector(".time-wrapper");
const colorArea = document.querySelector(".color-wrapper");
const madlibCard = document.querySelector(".madlib-card");
// also do one for the madlib card!

const madlibButton = document.getElementById("madlib-button");
madlibButton.addEventListener("click", showMeMadlib);
function showMeMadlib() {
  
  madlibArea.classList.toggle("show-me");
}
const timeButton = document.getElementById("time-button");
timeButton.addEventListener("click", showTimeSection);
function showTimeSection() {
  timeArea.classList.toggle("show-me");
}
const colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", showMeColor);
function showMeColor() {
  colorArea.classList.toggle("show-me");
}

const madlibForm = document.getElementById("madlib-form");
madlibForm.addEventListener("submit", onMadLibFormSubmit);
// on madlib form submit....
function onMadLibFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

  const madlib = `
  in a ${dataObject.adjective1} tech utopia, a coder named ${dataObject.humanName} always wore their ${dataObject.adjective2} hat and sipped ${dataObject.noun1}. One day, they discovered a ${dataObject.noun2} that could ${dataObject.verb1} anything!
  With this power, ${dataObject.humanName} started ${dataObject.verbEndingInIng} all the ${dataObject.pluralNoun1}, quickly becoming the "${dataObject.adjective3} Coder." Then, a ${dataObject.adjective4} ${dataObject.animal} warned them about the harmful ${dataObject.villainName}. Grabbing their trusty ${dataObject.noun3}, ${dataObject.humanName} set off to defeat ${dataObject.villainName}.
  After solving ${dataObject.adjective5} coding puzzles, ${dataObject.humanName} triumphed. The ${dataObject.place} was ${dataObject.adjective6} again, and everyone celebrated by dancing the ${dataObject.funnyDanceMove}!
  `;
  madlibCard.classList.toggle("show-me");
  madlibArea.classList.toggle("show-me");
  document.querySelector(".madlib-story").textContent = madlib;
  // can make overall UX for javascript area cleaner
	madlibForm.reset();
}

// world time stuffs
const timeForm = document.getElementById("time-form");
timeForm.addEventListener("submit", onTimeFormSubmit);
function onTimeFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  let date = new Date();
  let displayTime = date.toLocaleString('en-us', dataObject).split(",")[1];
  console.log(displayTime);
  // logs time for the chosen area
  document.querySelector(".clock-face").textContent = displayTime;
  console.log(dataObject);
}

// changing colors
// more radio buttons that change the theme!
// have the form element thing.... then
const colorForm = document.getElementById("color-form");
colorForm.addEventListener("submit", onColorFormSubmit);
function onColorFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("look", dataObject);
  if (dataObject.theme === "dark"){
    console.log("darkness surrounds")
    document.documentElement.style.setProperty('--background-light', '#0A0A0A');
    document.documentElement.style.setProperty('--background-dark', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-1', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-2', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-1', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-2', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-bg', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-icon', '#0A0A0A');
  } else if (dataObject.theme === "light") {
    console.log("lightness ensues") 
    document.documentElement.style.setProperty('--background-light', '#0A0A0A');
    document.documentElement.style.setProperty('--background-dark', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-1', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-2', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-1', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-2', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-bg', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-icon', '#0A0A0A');
  } else if (dataObject.theme === "rainbow") {
    console.log("colorful party")
    document.documentElement.style.setProperty('--background-light', '#0A0A0A');
    document.documentElement.style.setProperty('--background-dark', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-1', '#0A0A0A');
    document.documentElement.style.setProperty('--accent-2', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-1', '#0A0A0A');
    document.documentElement.style.setProperty('--highlight-2', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-bg', '#0A0A0A');
    document.documentElement.style.setProperty('--footer-icon', '#0A0A0A');
  }
  // e.g. --background-light #0A0A0A
  // first go through and clean up css colors! then they can be set here
  
}
// changeTheme();
