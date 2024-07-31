// Firebase stuff, now I may need spam protection!!! lol. 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// exposed, figure out vercel or something later, does it need node?
const firebaseConfig = {
    apiKey: "AIzaSyDTpx8wyjxXrzeZcq0wW2Ifs8BQQ0TCYJs",
    authDomain: "ac-portfolio-56568.firebaseapp.com",
    databaseURL: "https://ac-portfolio-56568-default-rtdb.firebaseio.com",
    projectId: "ac-portfolio-56568",
    storageBucket: "ac-portfolio-56568.appspot.com",
    messagingSenderId: "1032761574434",
    appId: "1:1032761574434:web:c53345712a4c7525fef67b",
    measurementId: "G-2E2PJ4MDJ5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    // Get values
    const name = getInputVal('name');
    const email = getInputVal('email');
    const comment = getInputVal('comment');
    // Save message
    saveMessage(name, email, comment);
    // Show alert
    alert('Message sent');
    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, comment) {
    const messagesRef = ref(database, 'messages');
    const newMessageRef = push(messagesRef);
    set(newMessageRef, {
        name: name,
        email: email,
        comment: comment
    });
}
