// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBndrBXfHTk0vIF_znqbwbn7J334HX9wDY",
    authDomain: "genius-car-service-by-react.firebaseapp.com",
    projectId: "genius-car-service-by-react",
    storageBucket: "genius-car-service-by-react.appspot.com",
    messagingSenderId: "652472601345",
    appId: "1:652472601345:web:8c75e02537c6290d296900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;