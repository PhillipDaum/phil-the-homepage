// variables for each area that shows/hides
const madlibArea = document.querySelector(".madlib-wrapper");
const timeArea = document.querySelector(".time-wrapper");
const colorArea = document.querySelector(".color-wrapper");
const madlibCard = document.querySelector(".madlib-card");
const fillerIcon = document.querySelector(".placeholder");

// shows/hides madlib
const madlibButton = document.getElementById("madlib-button");
madlibButton.addEventListener("click", showMeMadlib);
function showMeMadlib() {
  if (timeArea.classList.contains("show-me")) {
    timeArea.classList.toggle("show-me");
  } else if (colorArea.classList.contains("show-me")) {
    colorArea.classList.toggle("show-me");
  } else if (fillerIcon.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  } else if (madlibArea.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  } else if (madlibCard.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  }
  madlibArea.classList.toggle("show-me");
}
// shows/hides time area
const timeButton = document.getElementById("time-button");
timeButton.addEventListener("click", showTimeSection);
function showTimeSection() {
  if (madlibArea.classList.contains("show-me")) {
    madlibArea.classList.toggle("show-me");
  } else if (colorArea.classList.contains("show-me")) {
    colorArea.classList.toggle("show-me");
  } else if (madlibCard.classList.contains("show-me")) {
    madlibCard.classList.toggle("show-me");
  } else if (fillerIcon.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  } else if (timeArea.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  }
  timeArea.classList.toggle("show-me");
}
// shows/hides color area
const colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", showMeColor);
function showMeColor() {
  if (madlibArea.classList.contains("show-me")) {
    madlibArea.classList.toggle("show-me");
  } else if (timeArea.classList.contains("show-me")) {
    timeArea.classList.toggle("show-me");
  } else if (madlibCard.classList.contains("show-me")) {
    madlibCard.classList.toggle("show-me");
  } else if (fillerIcon.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  } else if (colorArea.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
  }
  colorArea.classList.toggle("show-me");
}

// submits madlib form and shows created madlib card area
const madlibForm = document.getElementById("madlib-form");
madlibForm.addEventListener("submit", onMadLibFormSubmit);
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
  madlibForm.reset();
}

// submits world time form and updates clock
const timeForm = document.getElementById("time-form");
timeForm.addEventListener("submit", onTimeFormSubmit);
function onTimeFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  let date = new Date();
  let displayTime = date.toLocaleString('en-us', dataObject).split(",")[1];
  document.querySelector(".clock-face").textContent = displayTime;
}

// submits form for color theme, changes colors
// seems to only change colors on this page
// NEED TO CHANGE THE COLORS IT MAKES IT ALL BLACK NOW!
const colorForm = document.getElementById("color-form");
colorForm.addEventListener("submit", onColorFormSubmit);
function onColorFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log("look", dataObject);
  if (dataObject.theme === "dark") {
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
}

