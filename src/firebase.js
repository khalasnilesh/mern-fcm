import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase";


 var firebaseConfig = {
    apiKey: "AIzaSyDhIHx3zEDFeEtC4gmbrEHwn8o0auUuJD8",
    authDomain: "mern-a57e9.firebaseapp.com",
    projectId: "mern-a57e9",
    storageBucket: "mern-a57e9.appspot.com",
    messagingSenderId: "704448395910",
    appId: "1:704448395910:web:df54c926221810966caf07",
    measurementId: "G-WXMGT3C4R5"
  };


const fire = firebase.initializeApp(firebaseConfig);
//export const auth = firebase.auth();
//export const firestore = firebase.firestore();
export default fire;
