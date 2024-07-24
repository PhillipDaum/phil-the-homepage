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
    madlibArea.classList.toggle("show-me");
  } else if (colorArea.classList.contains("show-me")) {
    colorArea.classList.toggle("show-me");
    madlibArea.classList.toggle("show-me");
  } else if (fillerIcon.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
    madlibArea.classList.toggle("show-me");
  } else if (madlibArea.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
    madlibArea.classList.toggle("show-me");
  } else if (madlibCard.classList.contains("show-me")) {
    fillerIcon.classList.toggle("show-me");
    madlibCard.classList.toggle("show-me");
  }
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
  if (dataObject.theme === "cyberpunk") {
    console.log("embracing the future");
    document.documentElement.style.setProperty('--background-light', '#1A1A1D');
    document.documentElement.style.setProperty('--background-dark', '#4E4E50');
    document.documentElement.style.setProperty('--accent-1', '#6F2232');
    document.documentElement.style.setProperty('--accent-2', '#950740');
    document.documentElement.style.setProperty('--highlight-1', '#C3073F');
    document.documentElement.style.setProperty('--highlight-2', '#1F1F1F');
    document.documentElement.style.setProperty('--footer-bg', '#4E4E50');
    document.documentElement.style.setProperty('--footer-icon', '#950740');
  } else if (dataObject.theme === "nature") {
    console.log("connecting with nature");
    document.documentElement.style.setProperty('--background-light', '#FAF3E0');
    document.documentElement.style.setProperty('--background-dark', '#8B5E3C');
    document.documentElement.style.setProperty('--accent-1', '#B29E58');
    document.documentElement.style.setProperty('--accent-2', '#5B8C5A');
    document.documentElement.style.setProperty('--highlight-1', '#A4DE02');
    document.documentElement.style.setProperty('--highlight-2', '#88B04B');
    document.documentElement.style.setProperty('--footer-bg', '#8B5E3C');
    document.documentElement.style.setProperty('--footer-icon', '#5B8C5A');
  } else if (dataObject.theme === "pastel") {
    console.log("embracing calm and soft tones");
    document.documentElement.style.setProperty('--background-light', '#FFF1E6');
    document.documentElement.style.setProperty('--background-dark', '#FFCAD4');
    document.documentElement.style.setProperty('--accent-1', '#B4F8C8');
    document.documentElement.style.setProperty('--accent-2', '#A0E7E5');
    document.documentElement.style.setProperty('--highlight-1', '#FFAEBC');
    document.documentElement.style.setProperty('--highlight-2', '#FBE7C6');
    document.documentElement.style.setProperty('--footer-bg', '#FFCAD4');
    document.documentElement.style.setProperty('--footer-icon', '#A0E7E5');
  }
}

