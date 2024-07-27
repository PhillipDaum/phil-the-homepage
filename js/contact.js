// Dope, now I need spam protection!!! lol. 
// and I don't wanna check the database all the time either....
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMvAARHN_kPKbopz4cdQoPCd_-_oetN2A",
    authDomain: "dev-portfolio-site-ae446.firebaseapp.com",
    databaseURL: "https://dev-portfolio-site-ae446-default-rtdb.firebaseio.com",
    projectId: "dev-portfolio-site-ae446",
    storageBucket: "dev-portfolio-site-ae446.appspot.com",
    messagingSenderId: "1017982875840",
    appId: "1:1017982875840:web:2f2f3a507096f6791dd525",
    measurementId: "G-2LR87GW5C4"
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
