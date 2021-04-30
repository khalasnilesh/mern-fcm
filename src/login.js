import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 var firebaseConfig = {
    apiKey: "AIzaSyDhIHx3zEDFeEtC4gmbrEHwn8o0auUuJD8",
    authDomain: "mern-a57e9.firebaseapp.com",
    projectId: "mern-a57e9",
    storageBucket: "mern-a57e9.appspot.com",
    messagingSenderId: "704448395910",
    appId: "1:704448395910:web:df54c926221810966caf07",
    measurementId: "G-WXMGT3C4R5"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
