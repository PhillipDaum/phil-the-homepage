// Firebase stuff, now I may need spam protection!!! lol. 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
// uncomment this out for local testing
// import firebaseConfig from "./config.js";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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
