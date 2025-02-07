// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB70MexHHV3Xm-_PLAn00KJ6oLOuAMPM1w",
    authDomain: "monty-events-3d3ec.firebaseapp.com",
    projectId: "monty-events-3d3ec",
    storageBucket: "monty-events-3d3ec.firebasestorage.app",
    messagingSenderId: "45511361039",
    appId: "1:45511361039:web:7295be152c20552b36197a",
    measurementId: "G-5ENZ46TXVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);