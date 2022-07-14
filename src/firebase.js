// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4G-ksiH32a9DakV-l_ZC0X6LjsMH-gdw",
  authDomain: "appongo.firebaseapp.com",
  databaseURL: "https://appongo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appongo",
  storageBucket: "appongo.appspot.com",
  messagingSenderId: "529489309175",
  appId: "1:529489309175:web:a708a9662a2b92487cd2f2",
  measurementId: "G-5RDLFXCWTY",
};
// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = (setPushToken) => {
  return getToken(messaging)
    .then((currentToken) => {
      console.log(currentToken);
      if (currentToken) {
        setPushToken(currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
