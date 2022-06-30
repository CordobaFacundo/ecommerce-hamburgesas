// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5psH3IhO8wEfyw765Ws7m9uzElVTMwI",
  authDomain: "tataburger-ecommerce.firebaseapp.com",
  projectId: "tataburger-ecommerce",
  storageBucket: "tataburger-ecommerce.appspot.com",
  messagingSenderId: "131546334078",
  appId: "1:131546334078:web:ad795f7042ecff43ce292f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}