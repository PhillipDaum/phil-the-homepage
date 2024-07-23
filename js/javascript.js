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
  // remove/change
  console.log(madlib);
  document.querySelector(".madlib-story").textContent = madlib;
  
  // it will update the dom, maybe fade or clear from the last thing and show a little page with the thing. 

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
// maybe a sider that changes stuff.



// let displayTime = today.toLocaleString();
// console.log(displayTime);

// let date = new Date();
// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'Africa/Nairobi',
//   }),
// ); // 👉️ "7/25/2023, 11:32:29 AM"

// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'Canada/Pacific',
//   }),
// ); // 👉️ "25/7/2023 8:32:29"