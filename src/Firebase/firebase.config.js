// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA60ZbmkRQkCQS0oM5QyQP0qHkwasorrF0",
  authDomain: "vibe-verse.firebaseapp.com",
  projectId: "vibe-verse",
  storageBucket: "vibe-verse.appspot.com",
  messagingSenderId: "424465152540",
  appId: "1:424465152540:web:c5bdd7e983380c4229bdd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;