// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6S5rIK4sub-AYmV3cxvG1R3NX_FrIBQ", //web API firebase (end with BQ)
  authDomain: "carpark-milkshake.firebaseapp.com",
  databaseURL: "https://carpark-milkshake-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carpark-milkshake",
  storageBucket: "carpark-milkshake.appspot.com",
  messagingSenderId: "204602359691",
  appId: "1:204602359691:web:e0e4b38725046b95d1b98e",
  measurementId: "G-YCV1QTCZYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};